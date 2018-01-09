export const types = {
  UPDATE_USER: "UPDATE_USER"
};

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case types.UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
