import Api from 'service';

export function actionTypeUserFetch(data) {
  return { type: 'USER_FETCH', data };
}

export function actionTypeUserAddTeam(data) {
  return { type: 'USER_ADD_TEAM', data };
}

export function actionTypeUserRemoveTeam(data) {
  return { type: 'USER_REMOVE_TEAM', data };
}

export function actionTypeUserEditTeam(data) {
  return { type: 'USER_EDIT_TEAM', data };
}

export const actionTypePlayerFetch = (data) => ({ type: 'PLAYER_FETCH', data });

export const actionTypeSearchPlayer = (data) => ({ type: 'SEARCH_PLAYER', data });

export const actionUserRemoveTeam = (data) => async (dispatch) => {
  // Call api
  dispatch(actionTypeUserRemoveTeam(data));
};

export const actionUserEditTeam = (data) => async (dispatch) => {
  // Call api
  dispatch(actionTypeUserEditTeam(data));
};

export const actionUserFetch = (id) => async (dispatch) => {
  const user = await Api.user.getUser(id);
  dispatch(actionTypeUserFetch(user));
};

export const actionUserEdit = (id, data) => async (dispatch) => {
  await Api.user.patchUser(id, data);
  dispatch(actionUserFetch(1));
};

export const actionPlayerFetch = () => async (dispatch) => {
  const players = await Api.player.getStatistic();
  dispatch(actionTypePlayerFetch(players));
};

export const actionSearchPlayer = (name) => async (dispatch) => {
  const players = await Api.searchPlayer.search(name);
  return dispatch(actionTypeSearchPlayer(players));
};
