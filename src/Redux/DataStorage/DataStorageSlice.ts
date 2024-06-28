import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  movies: any[];  // Adjust the type according to your data
}

const initialState: MovieState = {
  movies: []
};




export const counterSlice = createSlice({
  name: 'movie_name',
  initialState,
  reducers: {
    
    movietitleByStore: (state, action: PayloadAction<any[]>) => {
    //   state.action += action.payload.action;
    //   state.query+=action.payload.query;
    //state.movies.push(action.payload);
    state.movies = [...action.payload]

   
    

    },
  },
});

export const { movietitleByStore } = counterSlice.actions;

export default counterSlice.reducer;
