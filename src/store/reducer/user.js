const INITIAL_STATE = {
  teams: [{
    name: 'Name 1', description: 'description 1',
  }, {
    name: 'Name 2', description: 'description 2',
  }, {
    name: 'Name 3', description: 'description 3',
  }],
};

// {
//   teams: [{
//     key: 'teste 1', label: 'teste 1', description: 'description 1', value: 'teste 1', selected: true,
//   }, {
//     key: 'teste 2', label: 'teste 2', description: 'description 2', value: 'teste 2', selected: false,
//   }, {
//     key: 'teste 3', label: 'teste 3', description: 'description 3', value: 'teste 3', selected: false,
//   }],
// }

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEAM_ADD':
      return { ...state, teams: [...state.teams, action.data] };
    default:
      return state;
  }
}
