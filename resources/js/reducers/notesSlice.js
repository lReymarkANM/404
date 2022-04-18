import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    collectionId: 0,
    list: []
  },
  reducers: {
    setCollectionId: (state, action) => {
      state.collectionId = action.payload.collectionId;
    },
    setNotes: (state, action) => {
      state.list = action.payload.notes;
    }
  }
});

export const { setCollectionId, setNotes } = notesSlice.actions;
export default notesSlice.reducer;