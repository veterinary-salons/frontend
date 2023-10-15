export const SET_SERVIES = 'SET_SERVIES';
export const ADD_SERVIES = 'ADD_SERVIES';

export const addService = (servies, name) => ({
  type: ADD_SERVIES,
  name,
  payload: servies,
});
