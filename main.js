const rp = require('request-promise');

const getCity = () => rp({
  method: 'POST',
  uri: 'http://localhost:3000/list-city',
  json: true
});

const getTransport = () => rp({
  method: 'POST',
  uri: 'http://localhost:3000/gettransport',
  json: true
});

const initTransport = () => rp({
  method: 'POST',
  uri: 'http://localhost:3000/inittransport',
  json: true
});

const updateTransport = (cities, ponies, unicorns) => rp({
  method: 'POST',
  uri: 'http://localhost:3000/updatetransport',
  body: {
    cities,
    ponies,
    unicorns
  },
  json: true
});

const getWeather = ville => rp({
  method: 'POST',
  uri: 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + ',fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric',
  json: true
});

const maxRatio = townList => townList.reduce((a, b) => a[1] > b[1] ? a : b,
  ['', -Infinity]);

const randomInt = (min = 1, max = 12) => Math.floor(
  Math.random() * (max - min + 1)) +
  min;

const calculRatio = async () => {
  const citiesRatio = [];
  const retTransport = await getTransport();
  const retCities = await getCity();
  for (let i = 0; i < retTransport.length; i++) {
    const div =
      (retTransport[i].unicorns * 0.8) + (retTransport[i].ponies * 0.4);
    let ratio = retCities[i][2] / ((div) ? div : 1);
    ratio = retCities[i][1] / ratio;
    citiesRatio.push(
      [retTransport[i].cities, ratio, retCities[i][2], retCities[i][1]]);
  }
  console.log('[Ville   , Ratio calculé,  km,  nb mechants]');
  console.log(citiesRatio);
  return (maxRatio(citiesRatio));
};

const updateRanch = async city => {
  const retTransport = await getTransport();
  for (let i = 0; i < retTransport.length; i++) {
    if (retTransport[i].cities === city) {
      updateTransport(city,
        randomInt(),
        randomInt());
    } else {
      updateTransport(retTransport[i].cities,
        retTransport[i].ponies + randomInt(),
        retTransport[i].unicorns + randomInt());
    }
  }
};
const fonc = async () => {
  const ret1 = (await calculRatio())[0];
  console.log('Le Héro se rend à : ', ret1);
  const retWeather = await getWeather(ret1);
  console.log('La température dans cette ville est de ', retWeather.main.temp, ' degrès.');
  await updateRanch(ret1);
};
const main = async () => {
  await initTransport();
  setInterval(fonc, 2000);
};

main().then(() => {
});
