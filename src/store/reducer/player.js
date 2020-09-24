const INITIAL_STATE = {
  mostPicked: {
    name: '',
    initials: '',
    rating: '',
  },
  lessPicked: {
    name: '',
    initials: '',
    rating: '',
  },
  topTeams: {
    high: [],
    low: [],
  },
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYER_FETCH':
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
