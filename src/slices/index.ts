import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  videoState: boolean;
  nickName: string;
}

const initialState: InitialState = {
  videoState: false,
  nickName: '',
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    onChangeVideoState(state, action) {
      state.videoState = action.payload;
    },
    onChangeNickname(state, action) {
      state.nickName = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default indexSlice;
