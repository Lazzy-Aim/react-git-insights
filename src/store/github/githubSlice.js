import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: []
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorite = state.favorite.filter(favorite => favorite.id !== action.payload);
    }
  }
})

export const {addFavorite, removeFavorite} = githubSlice.actions
export default githubSlice.reducer