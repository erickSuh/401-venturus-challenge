const INITIAL_STATE = {
  maxId: 3,
  teams: [
    {
      id: 1,
      name: "Name 1",
      description: "description 1",
      tags: ["1 Tag 1", "1 Tag 2", "1 Tag 3"],
      website: "website.teste.io",
      type: "real",
      players: [
        { id: 2, name: "Claudia Mello Paes" },
        { id: 3, name: "Jamie Vardy" },
        { id: 4, name: "Cristiano Ronaldo" },
      ],
    },
    {
      id: 2,
      name: "Name 2",
      description: "description 2",
      tags: ["2 Tag 1", "2 Tag 2", "2 Tag 3"],
      website: "website.teste.io",
      type: "fantasy",
      players: [
        { id: 3, name: "Jamie Vardy" },
        { id: 4, name: "Cristiano Ronaldo" },
      ],
    },
    {
      id: 3,
      name: "Name 3",
      description: "description 3",
      tags: ["3 Tag 1", "3 Tag 2", "3 Tag 3"],
      website: "website.teste.io",
      type: "real",
      players: [
        { id: 1, name: "Erick Kenji Sugahara" },
        { id: 2, name: "Claudia Mello Paes" },
        { id: 3, name: "Jamie Vardy" },
        { id: 4, name: "Cristiano Ronaldo" },
      ],
    },
  ],
};

export default function teams(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_ADD_TEAM":
      return {
        ...state,
        teams: [...state.teams, { ...action.data, id: state.maxId + 1 }],
      };
    case "USER_REMOVE_TEAM":
      return {
        ...state,
        teams: state.teams.filter((team) => team.name !== action.data),
      };
    case "USER_EDIT_TEAM":
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
