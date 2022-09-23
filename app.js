const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine","ejs");

const mainRouter = require("./routes/index");
app.use("/api", mainRouter)  
  
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})  
app.use((req, res) => {
    res.status(404).send("Error 404, Route not found");
  });  
    
   
 