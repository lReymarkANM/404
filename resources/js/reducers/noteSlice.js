import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    data: {}
  },
  reducers: {
    setNote: (state, action) => {
      state.data = action.payload.note;
    },
    setContent: (state, action) => {
      state.data.content = action.payload.content;
    }
  }
});

export const { setNote, setContent } = noteSlice.actions;
export default noteSlice.reducer;