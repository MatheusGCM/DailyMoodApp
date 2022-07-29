function switchMoods(mood) {
  let img;
  let txt;
  let color;
  switch (mood) {
    case 'happy':
      img = require('../assets/happy.png');
      txt = 'FELIZ';
      color = '#E24B4B';
      break;
    case 'terrible':
      img = require('../assets/terrible.png');
      txt = 'ACABADO';
      color = '#4B75E2';
      break;
    case 'sad':
      img = require('../assets/sad.png');
      txt = 'TRISTE';
      color = '#4BE263';
      break;
    case 'ok':
      img = require('../assets/ok.png');
      txt = 'OK';
      color = '#fc8020';
      break;
    case 'radiant':
      img = require('../assets/radiant.png');
      txt = 'RADIANTE';
      color = '#f00065';
      break;
    default:
      img = require('../assets/happy.png');
      txt = 'FELIZ';
      color = '#E24B4B';
  }
  return {img, txt, color};
}

export default switchMoods;
