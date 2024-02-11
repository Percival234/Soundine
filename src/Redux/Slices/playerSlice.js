import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    track: null,
    tracks: [],
    isPlaying: false,
    index: 0,
  },
  reducers: {
    stop: (state) => {
      state.isPlaying = false;
      document.title = 'Soundine';
    },
    play: (state) => {
      state.isPlaying = true;
      document.title = state.track.name;
    },
    setTracks: (state, actions) => {
      if (actions.payload.index !== undefined) {
        // the index value can be zero, but it is not true
        state.index = actions.payload.index;
      }
      state.tracks = actions.payload.tracks;
      state.track = state.tracks[state.index];
    },
    next: (state) => {
      state.index = state.index >= state.tracks.length - 1 ? 0 : state.index + 1;
      state.track = state.tracks[state.index];
    },
    prev: (state) => {
      if (state.index <= 0) return;
      state.index--;
      state.track = state.tracks[state.index];
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
