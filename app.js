const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")
const methodOverride = require('method-override')
const ejs = require("ejs")
const path = require("path")
const fs = require("fs")

const photoController = require("./contollers/photoController")
const pageController = require("./contollers/pageController")

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/pcat-test-db");

// TEMPLATE ENGİNE
app.set("view engine", "ejs")

// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods:["POST","GET"]
}))

// ROUTES
app.get("/about",pageController.getAboutPAge)
app.get("/add",pageController.getAddPage)
app.get("/photos/edit/:id", pageController.getEditPage)

app.get("/", photoController.getAllPhotos)
app.get("/photos/:id", photoController.getPhoto)
app.put("/photos/:id", photoController.updatePhoto)
app.post("/photos", photoController.createPhoto)
app.delete("/photos/:id", photoController.deletePhoto)

const port = 3000;
app.listen(port, () => {
    console.log(`Server started in port ${port} `)
});
