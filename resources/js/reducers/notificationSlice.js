import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    show: false,
    label: ''
  },
  reducers: {
    showNotification: (state, action) => {
      state.show = true;
      state.label = action.payload.label;
    },
    hideNotification: state => {
      state.show = false;
    }
  }
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;