import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  videoState: boolean;
  data: {
    accessToken: string;
    refreshToken: null;
    isFirst: boolean;
    email: string;
  };
}

const initialState: InitialState = {
  videoState: false,
  data: {
    accessToken: '',
    refreshToken: null,
    isFirst: false,
    email: '',
  },
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    onChangeVideoState(state, action) {
      state.videoState = action.payload;
    },
    getLoginUserData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default indexSlice;
