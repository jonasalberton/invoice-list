import { createSlice } from '@reduxjs/toolkit';

const THEME_KEY = 'THEME'

export interface ThemeState {
  value: 'light' | 'dark'
}

const initialState: ThemeState = {
  value: localStorage.getItem(THEME_KEY) as any || 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.value === 'dark' ? 'light' : 'dark';
      state.value = newTheme;
      localStorage.setItem(THEME_KEY, newTheme);
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer