const INITIAL_STATE = {
  mostPicked: {
    name: 'Cristiano Ronaldo',
    initials: 'CR',
    rating: '100%',
  },
  lessPicked: {
    name: 'Erick Sugahara',
    initials: 'ES',
    rating: '3%',
  },
  topPicks: [],
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYER_FETCH':
      return {
        ...state,
        teams: [INITIAL_STATE],
      };
    default:
      return state;
  }
}
