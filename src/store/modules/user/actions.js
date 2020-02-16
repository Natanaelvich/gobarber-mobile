export function updateProfleRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfleSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfleFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
