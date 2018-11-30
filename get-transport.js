const mongoose = require('mongoose');
const {Transport} = require('./struct-db-transport');

// Mongoose.useNewUrlParser();
mongoose.connect('mongodb://192.168.99.100:27017/unicorns-db');

// Const init = async () => {
//   await Transport.insertMany([
//     {cities: 'Paris', unicorns: 0, ponies: 0},
//     {cities: 'Marseille', unicorns: 0, ponies: 0},
//     {cities: 'Bordeaux', unicorns: 0, ponies: 0},
//     {cities: 'Grenoble', unicorns: 0, ponies: 0},
//     {cities: 'Ivry', unicorns: 0, ponies: 0}
//   ]);
//   mongoose.disconnect();
// };
//
// init();

const getTransport = async () => {
  const a = await Transport.find({}).exec();
  await mongoose.disconnect();
  return a;
};

const getAllUnicorns = async () => ({
  status: 200,
  body: JSON.stringify(await getTransport())
});

module.exports = {
  getAllUnicorns
};
