import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    data: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.authenticate;
    },
    setProfilePicture: (state, action) => {
      state.data.profilePicture = action.payload.profilePicture;
    }
  }
});

export const { setUser, setIsAuthenticated, setProfilePicture } = userSlice.actions;
export default userSlice.reducer;