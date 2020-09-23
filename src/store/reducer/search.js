const INITIAL_STATE = {
  players: [],
  isLoading: false,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_PLAYER":
      return {
        ...state,
        players: action.data,
      };
    default:
      return state;
  }
}
