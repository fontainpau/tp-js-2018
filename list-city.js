const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) +
  min;

const createTownList = () => [
  'Paris',
  'Lyon',
  'Grenoble',
  'Lille',
  'Toulouse',
  'Ivry-Sur-Seine'
].map(town => [town, randomInt(1, 1000), randomInt(1, 10000)]);

const listHandler = async () => ({
  status: 200,
  body: JSON.stringify(createTownList())
});

module.exports = {
  listHandler
};
