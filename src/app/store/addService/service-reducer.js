import { ADD_SERVIES } from './service-action';

const addServiceReducer = (state = {}, { type, name, payload }) => {
  switch (type) {
    case ADD_SERVIES:
      return { ...state, [name]: payload };

    default:
      return state;
  }
};

export default addServiceReducer;
