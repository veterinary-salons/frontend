import { createSlice } from '@reduxjs/toolkit';

const addImgService = createSlice({
  name: 'addImg',
  initialState: '',
  reducers: {
    setImgService: (state, action) => action.payload,
  },
});

export const { setImgService } = addImgService.actions;
export default addImgService.reducer;
