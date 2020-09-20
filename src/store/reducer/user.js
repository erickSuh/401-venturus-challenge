const INITIAL_STATE = {
  teams: [{
    id: 1, name: 'Name 1', description: 'description 1',
  }, {
    id: 2, name: 'Name 2', description: 'description 2',
  }, {
    id: 3, name: 'Name 3', description: 'description 3',
  }],
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER_ADD_TEAM':
      return { ...state, teams: [...state.teams, action.data] };
    case 'USER_REMOVE_TEAM':
      return { ...state, teams: state.teams.filter((team) => (team.name !== action.data)) };
    default:
      return state;
  }
}
