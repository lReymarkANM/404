import { createSlice } from '@reduxjs/toolkit';

const TABS = ['collections', 'notes', 'profile'];

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tab: TABS[0]
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload.tab;
    }
  }
});

export { TABS };
export const { setTab } = tabsSlice.actions;
export default tabsSlice.reducer;