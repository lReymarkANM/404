import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';
import notificationReducer from './reducers/notificationSlice';
import collectionsSlice from './reducers/collectionsSlice';
import notesSlice from './reducers/notesSlice';
import noteSlice from './reducers/noteSlice';
import tabsSlice from './reducers/tabsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    collections: collectionsSlice,
    notes: notesSlice,
    note: noteSlice,
    tabs: tabsSlice
  },
});