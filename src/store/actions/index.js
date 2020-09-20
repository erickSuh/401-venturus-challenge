export function userAddTeam(data) {
  return { type: 'USER_ADD_TEAM', data };
}

export function userRemoveTeam(data) {
  return { type: 'USER_REMOVE_TEAM', data };
}
