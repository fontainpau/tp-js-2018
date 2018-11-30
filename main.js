// Bash --login '/Applications/Docker/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh'
// docker run -p 27017:27017 mongo
// yarn run start
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

// TODO uncomment this when feature ponies is handled
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

// TODO const bestRatio = townList => townList.map(
//   town => [town[0], town[1] / town[2]]);
const maxRatio = townList => townList.reduce((a, b) => a[1] > b[1] ? a : b,
  ['', -Infinity]);
// TODO const bestValue = mostVillains;
// const minRatio = townList => townList.reduce((a, b) => a[2] < b[2] ? a : b,
//   ['', -Infinity]);

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
  // Console.log(citiesRatio);
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
const fonc=async()=>{
  const ret1 = (await calculRatio())[0];
  console.log(ret1);
  await updateRanch(ret1);
}
const main = async () => {
  await initTransport();
  setInterval(fonc, 2000);

};

main().then(() => {
});

/*  TODO --------------Commentaire perso---------------*/
//  api google
//  ember
// const ret = await getCity();
// console.log(ret);
// console.log(
//   'Number villains : ' + minRatio(ret)[0] + " " + mostVillains(ret)[1]);
// console.log(
//   'Best distance : ' + bestDistance(ret)[0] + " " + bestDistance(ret)[2]);
// console.log(bestRatio(ret));
// console.log(`Best value : ${bestValue(bestRatio(ret)).join(' ')}`);
// ret2 = await getTransport();
// console.log(ret2);
// console.log(ret2[1]["cities"],ret2[1]["ponies"],ret2[1]["unicorns"]);
// await updateTransport("Lyon", 8, 10);
// ret2 = await getTransport();
// console.log(ret2[1]["cities"],ret2[1]["ponies"],ret2[1]["unicorns"]);
