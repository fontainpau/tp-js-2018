const mongoose = require('mongoose');
const {Transport} = require('./struct-db-transport');

// Mongoose.useNewUrlParser();
mongoose.connect('mongodb://192.168.99.100:27017/unicorns-db');

const initialisation = async () => {
  await Transport.insertMany([
    {cities: 'Paris', unicorns: 2, ponies: 0},
    {cities: 'Lyon', unicorns: 7, ponies: 0},
    {cities: 'Toulouse', unicorns: 9, ponies: 0},
    {cities: 'Grenoble', unicorns: 12, ponies: 0},
    {cities: 'Lille', unicorns: 4, ponies: 0},
    {cities: 'Ivry-Sur-Seine', unicorns: 10, ponies: 0}
  ]);
  mongoose.disconnect();
};
const init = async () => ({
  status: 200,
  body: JSON.stringify(await initialisation())
});

module.exports = {
  init
};
