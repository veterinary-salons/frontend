const initialState = {
  bookingDate: null,
  bookingTime: null,
  appointmentType: {
    meToSpec: false,
    specToMe: false,
  },
  selectedService: null,
};

// eslint-disable-next-line default-param-last
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKING_DATE':
      return {
        ...state,
        bookingDate: action.date,
      };
    case 'SET_BOOKING_TIME':
      return {
        ...state,
        bookingTime: action.time,
      };
    case 'SET_APPOINTMENT_TYPE':
      return {
        ...state,
        appointmentType: {
          ...state.appointmentType,
          ...action.appointmentType,
        },
      };
    case 'SET_SELECTED_SERVICE':
      return {
        ...state,
        selectedService: action.selectedService,
      };
    default:
      return state;
  }
};

export default bookingReducer;
