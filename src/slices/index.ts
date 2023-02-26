import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  videoState: boolean;
  data: {
    accessToken: string;
    refreshToken: null;
    isFirst: boolean;
    email: string;
  };
  memberShipState: boolean;
}

const initialState: InitialState = {
  videoState: false,
  data: {
    accessToken: '',
    refreshToken: null,
    isFirst: false,
    email: '',
  },
  memberShipState: false,
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
    onChangeMemberShip(state) {
      state.memberShipState = true;
    },
  },
  extraReducers: builder => {},
});

export default indexSlice;
