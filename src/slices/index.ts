import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  videoState: boolean;
}

const initialState: InitialState = {
  videoState: false,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    onChangeVideoState(state, action) {
      state.videoState = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default indexSlice;
