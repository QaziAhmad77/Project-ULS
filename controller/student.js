const db = require("../models");
const student = require("../models/student");
const Student = db.student;

module.exports = {
    getStudents: async (req, res) => {
        try {
            console.log("getStudents");
            const data = await Student.findAll({});
            res.status(200).render("getStudents", {
                data,
            });
        } catch (err) {
            console.log(err);
            await transaction.rollback();
            return res
                .status(err.status || 500)
                .message(err.message || "Something went wrong...");
        }
    },
    search: async (req, res) => {
        try {
        const {search} = req.body;
        const data = await Student.findAll({
            where: {name: search},
        })
        res.status(200).render("getStudents",{
            data,
        })
        } catch (err) {
            console.log(err);
            await transaction.rollback();
            return res
                .status(err.status || 500)
                .message(err.message || "Something went wrong...");
        }
    },
}