const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//connect DB
mongoose.connect("mongodb://localhost/pcat-test-db");

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model("Photo", PhotoSchema)

// create a photo
// Photo.create({
//     title: "Photo Title 2",
//     description: "Photo description 2 lorem ipsum"
// })

// read a photo
// Photo.find({}).then(photo=>{console.log(photo)}).catch(err=>{console.log(err)})

// update a photo
/* const id = "6655fda37d86481a50ea8f7d"

Photo.findByIdAndUpdate(
    id, {
        title: "Photo Title 1.0 updated",
        description: "Photo Description 1.0 updated"
    },{new: true}
).then(photo => {console.log(photo)})
.catch(err => console.log(err)) */

// delete a photo
const id = "6655ffc97c6412c8fbcb4f33"
Photo.findByIdAndDelete(id).then(photo => {console.log("photo removed")}).catch(err => console.log(err))