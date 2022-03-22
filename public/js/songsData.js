songsDataForApi = [
  {
    artist: 'Idina Menzel',
    title: 'Let It Go'
  },
  {
    artist: 'Backstreet Boys',
    title: 'All I Have to Give'
  },
  {
    artist: 'Aqua',
    title: 'Barbie Girl'
  },
  {
    artist: 'Images',
    title: 'Les démons de minuit'
  },
  {
    artist: 'Jacques Brel',
    title: 'Ne me quitte pas'
  },
  {
    artist: 'Charles Aznavour',
    title: 'La bohème'
  },
  {
    artist: 'Édith Piaf',
    title: 'La foule'
  },
  {
    artist: 'Marc Lavoine',
    title: 'Elle a les yeux revolver'
  },
  {
    artist: 'Céline Dion',
    title: 'Sous le vent'
  },
  {
    artist: 'Céline Dion',
    title: 'Pour Que Tu M\'Aimes Encore'
  },
  {
    artist: 'Patrick Bruel',
    title: 'Place des grands hommes'
  },
  {
    artist: 'Début de Soirée',
    title: 'Nuit de folie'
  },
  {
    artist: 'Lio',
    title: 'Banana Split'
  },
  {
    artist: 'Idina Menzel',
    title: 'Let It Go'
  },
  {
    artist: 'Francis Cabrel',
    title: 'Je l\'aime à mourir'
  },
  {
    artist: ' Jean-Jacques Goldman',
    title: 'Quand la musique est bonne'
  },
  {
    artist: 'Alain Bashung',
    title: 'Gaby Oh Gaby'
  },
  {
    artist: 'Jean-Jacques Goldman',
    title: 'Comme toi'
  },
  {
    artist: 'Renaud',
    title: 'Morgane de toi'
  },

];

const URL_API = 'https://api.lyrics.ovh/v1/';
const makeUrlForApi = ({ artist, title }) => (`${URL_API}/${artist}/${title}`);

// Function make Random Unique Ids
// Range = range of random numbers possibilities
// OutputLength = how many unique ids we want
// Return : an array of the same length of outputLength, containing the unique ids
function makeRandomUniqueIds(range, outputLength) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let randomIds = [];

  for (let i = 1; i <= outputLength; i++) {
    const random = Math.floor(Math.random() * (range - i));
    randomIds.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return randomIds;
}

const listRandIdsSongData = makeRandomUniqueIds(songsDataForApi.length - 1, 3);

const urlDataList = listRandIdsSongData.map((rid) => {
  let songUrl = makeUrlForApi(songsDataForApi[rid]);
  return { 
    url: songUrl, 
    title: songsDataForApi[rid].title, 
    artist: songsDataForApi[rid].artist,
  };
});

// const urls = [
//   makeUrlForApi(songsDataForApi[0]),
//   makeUrlForApi(songsDataForApi[1]),
//   makeUrlForApi(songsDataForApi[2]),
// ];

// console.log('Urls :::', urlDataList);