import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(state.user)); // Save user to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false
      localStorage.removeItem('user'); // Remove user from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;