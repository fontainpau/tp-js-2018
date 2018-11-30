
const mongoose = require('mongoose');
const {Transport} = require('./struct-db-transport');
// Mongoose.useNewUrlParser();
mongoose.connect('mongodb://192.168.99.100:27017/unicorns-db');

const update = async ({cities, ponies, unicorns}) => {
  await Transport.updateOne({cities}, {unicorns, ponies});
  mongoose.disconnect();
};
const updating = async msg => ({
  status: 200,
  body: JSON.stringify(await update(JSON.parse(msg.body)))
});

module.exports = {
  updating
};

