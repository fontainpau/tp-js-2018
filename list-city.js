function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createVille() {
  const ville = ['Paris',
    'Lyon',
    'Grenoble',
    'Lille',
    'Toulouse',
    'Ivry-Sur-Seine'];
  const buff = [];
  for (const i in ville) {
    buff.push([ville[i], entierAleatoire(1, 1000), entierAleatoire(1, 10000)]);
  }
  return buff;
}

const listHandler = async () => ({
  status: 200,
  body: JSON.stringify(createVille())
});

module.exports = {
  listHandler
};
