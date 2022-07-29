function switchActivities(atv) {
  let nameIcon;
  let nameActivities;
  switch (atv) {
    case 'sports':
      nameIcon = 'skateboarding';
      nameActivities = 'esporte';
      break;
    case 'cooking':
      nameIcon = 'chef-hat';
      nameActivities = 'cozinhar';
      break;
    case 'games':
      nameIcon = 'controller-classic';
      nameActivities = 'jogos';
      break;
    case 'shopping':
      nameIcon = 'cart';
      nameActivities = 'compras';
      break;
    case 'good_meal':
      nameIcon = 'silverware-fork-knife';
      nameActivities = 'boa refeição';
      break;
    case 'party':
      nameIcon = 'party-popper';
      nameActivities = 'festa';
      break;
    case 'rest':
      nameIcon = 'bed';
      nameActivities = 'descanso';
      break;
    case 'date':
      nameIcon = 'human-male-female';
      nameActivities = 'encontro';
      break;
    case 'movies':
      nameIcon = 'filmstrip';
      nameActivities = 'filmes e séries';
      break;
    default:
      nameIcon = 'bed';
      nameActivities = 'descanso';
  }
  return {nameIcon, nameActivities};
}

export default switchActivities;
