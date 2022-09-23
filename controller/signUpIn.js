const db = require("../models");
const student = require("../models/student");
const Student = db.student;

module.exports = {
    main: async (req, res) => {
        try {
            console.log("main");
            res.status(200).render("main");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong...");
        }
    },

    signUpForm: async (req, res) => {
        try {
            console.log("signUpForm");
            res.status(200).render("signUp");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong...");
        }
    },

    signUp: async (req, res) => {
        try {
            console.log("signUp");
            const { name, email, registrationNo, department, gender } = req.body;
            const emailFound = await Student.findOne({
                where: { email: email },
            })
            if (emailFound) {
                return res.status(409).send("Email already exists");
            }
            const registrationNoFound = await Student.findOne({
                where: { registrationNo: registrationNo },
            })
            if (registrationNoFound) {
                return res.status(409).send("Registration number already exist");
            }
            const data = await Student.create({
                name: name,
                email: email,
                registrationNo: registrationNo,
                department: department,
                gender: gender,
            })
            res.status(200).redirect("/api/main");
        } catch (e) {
            let message;
            e.errors.forEach(error => {
                switch (error.validatorKey) {
                    case 'isEmail':
                        message = "@ must be includes in your email";     // here error will come from the model while in (len and islowercase) error is come from the controller
                        break;
                    case 'isInt':
                        message = "registration number must be an integer";
                        break;
                    case 'len':
                        message = "registration number must between 2 and 4 digits";
                        break;
                }
            });
            res.status(200).send(message);
        }
    },

    logInForm: async (req, res) => {
        try {
            console.log("logInForm");
            res.status(200).render("logIn");
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong...");
        }
    },

    logIn: async (req, res) => {
        try {
            const { email, registrationNo } = req.body;
            if (!email || !registrationNo) {
                return res.status(400).send("Required fields cannot be empty");
            }
            let student = await Student.findOne({
                where: {
                    email: email,
                    registrationNo: registrationNo,
                },
            });
            if (!student) {
                return res.status(404).send("Student does not exist");
            }
            res.status(200).redirect("/api/main");
        } catch (err) {
            console.log(err);
            await transaction.rollback();
            return res
                .status(err.status || 500)
                .message(err.message || "Something went wrong...");
        }
    }
}
