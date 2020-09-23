const INITIAL_STATE = {
  maxId: 0,
  teams: [],
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER_FETCH':
      return {
        ...state,
        ...action.data,
      };
    case 'USER_ADD_TEAM':
      return {
        ...state,
        teams: [...state.teams, { ...action.data, id: state.maxId + 1 }],
      };
    case 'USER_REMOVE_TEAM':
      return {
        ...state,
        teams: state.teams.filter((team) => team.name !== action.data),
      };
    case 'USER_EDIT_TEAM':
      return {
        ...state,
        teams: state.teams.map((team) => {
          if (team.id === action.data.id) {
            return action.data;
          }
          return team;
        }),
      };
    default:
      return state;
  }
}
