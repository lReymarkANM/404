import { createSlice } from '@reduxjs/toolkit';

const collectionsSlice = createSlice({
  name: 'collections',
  initialState: {
    list: null
  },
  reducers: {
    setCollections: (state, action) => {
      state.list = action.payload.list;
    }
  }
});

export const { setCollections } = collectionsSlice.actions;
export default collectionsSlice.reducer;