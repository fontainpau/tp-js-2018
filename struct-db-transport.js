const mongoose = require('mongoose');

const {Schema} = mongoose;

const transport = new Schema({
  cities: {type: String, required: true},
  unicorns: Number,
  ponies: Number
});

const Transport = mongoose.model('Ranches', transport);

module.exports = {Transport};
