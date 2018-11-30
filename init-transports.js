const mongoose = require('mongoose');
const {Transport} = require('./struct-db-transport');

const randomInt = (min = 1, max = 12) => Math.floor(
  Math.random() * (max - min + 1)) +
  min;

// Mongoose.useNewUrlParser();
mongoose.connect('mongodb://192.168.99.100:27017/unicorns-db');

const initialisation = async () => {
  await Transport.remove({}).exec();
  await Transport.insertMany([
    {cities: 'Paris', unicorns: randomInt(), ponies: randomInt()},
    {cities: 'Lyon', unicorns: randomInt(), ponies: randomInt()},
    {cities: 'Toulouse', unicorns: randomInt(), ponies: randomInt()},
    {cities: 'Grenoble', unicorns: randomInt(), ponies: randomInt()},
    {cities: 'Lille', unicorns: randomInt(), ponies: randomInt()},
    {cities: 'Ivry-Sur-Seine', unicorns: randomInt(), ponies: randomInt()}
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
