export const setBookingDate = (date) => ({
  type: 'SET_BOOKING_DATE',
  date,
});

export const setBookingTime = (time) => ({
  type: 'SET_BOOKING_TIME',
  time,
});

export const setAppointmentType = (appointmentType) => ({
  type: 'SET_APPOINTMENT_TYPE',
  appointmentType,
});

export const setSelectedService = (selectedService) => ({
    type: 'SET_SELECTED_SERVICE',
    payload: selectedService,
});
