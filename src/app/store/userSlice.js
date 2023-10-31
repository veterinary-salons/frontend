/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import img from '../../assets/images/icon/avatar/img-avatar.svg';

const initialState = {
  isLogin: false,
  profileType: '',
  data: {
    name: 'Ася',
    surname: 'Малинина',
    tel: '8(918) 566-78-49',
    address: 'г. Москва, ул. Гагарина, д. 6, кв. 145',
    email: 'asyam1998cat@mail.ru',
    password: '1234567f',
    src: img,
    exit: [
      {
        clientPlace: false,
        text: 'выезжаю к клиентам',
      },
      {
        specialistPlace: true,
        text: 'принимаю у себя',
      },
    ],
  },
  isLoading: false,
  isFailed: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    setUserType: (state, { payload }) => {
      state.profileType = payload;
    },
    logoutUser: (state) => {
      state.data = null;
      state.isLogin = false;
    },
    setUser: (state, { payload }) => {
      state.data = payload;
    },
    enableAnyError: (state) => {
      state.error = 'Любой текст ошибки';
    },
  },
});

export const {
  setUserLogin,
  setUserType,
  logoutUser,
  setUser,
  enableAnyError,
} = userSlice.actions;
