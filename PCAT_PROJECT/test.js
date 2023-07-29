const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connection to DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//Creating Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//Creating a Photo
/*
Photo.create({
  title: 'Photo Title 1',
  description: 'Photo desc lalala',
});
*/

//Read a Photo
//Photo.find();

//Update a Photo
const id = '64c556af46bcbdae51c4b2f7';

Photo.findByIdAndUpdate(id, {
  title: 'Photo Title 2 Updated',
  description: 'Photo desc updated lololo',
});

//Delete a Photo
//Photo.findByIdAndDelete(id);
