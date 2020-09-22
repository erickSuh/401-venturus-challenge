export function actionTypeUserAddTeam(data) {
  return { type: "USER_ADD_TEAM", data };
}

export function actionTypeUserRemoveTeam(data) {
  return { type: "USER_REMOVE_TEAM", data };
}

export function actionTypeUserEditTeam(data) {
  return { type: "USER_EDIT_TEAM", data };
}

export const actionTypePlayerFetch = () => {
  return { type: "PLAYER_FETCH" };
};

export const actionUserAddTeam = (data) => async (dispatch) => {
  //Call api
  dispatch(actionTypeUserAddTeam(data));
};

export const actionUserRemoveTeam = (data) => async (dispatch) => {
  //Call api
  dispatch(actionTypeUserRemoveTeam(data));
};

export const actionUserEditTeam = (data) => async (dispatch) => {
  //Call api
  dispatch(actionTypeUserEditTeam(data));
};

export const actionPlayerFetch = () => async (dispatch) => {
  dispatch(actionTypePlayerFetch());
};
