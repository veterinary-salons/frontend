import { ADD_SERVIES } from './servies-action';

const addServiesReducer = (state = {}, { type, name, payload }) => {
  switch (type) {
    case ADD_SERVIES:
      return { ...state, [name]: payload };

    default:
      return state;
  }
};

export default addServiesReducer;
