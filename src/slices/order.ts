import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Order {
  orderId: string;
  start: {
    latitude: number;
    longitude: number;
  };
  end: {
    latitude: number;
    longitude: number;
  };
  price: number;
  image?: string;
  rider?: string;
  completedAt?: string;
}

interface InitialState {
  orders: Order[];
  deliveries: Order[];
  completes: Order[];
}

const initialState: InitialState = {
  orders: [], // 실시간 받는 오더 , 거절하면 오더에서 뺴주기
  deliveries: [], // 수락한 오더
  completes: [], // 완료한 오더
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    acceptOrder(state, action: PayloadAction<string>) {
      const index = state.orders.findIndex(v => v.orderId === action.payload);
      if (index > -1) {
        state.deliveries.push(state.orders[index]); // accept order 추가
        state.orders.splice(index, 1); // 기존 order에서 제거
      }
    },
    rejectOrder(state, action) {
      const index = state.orders.findIndex(v => v.orderId === action.payload);
      if (index > -1) {
        state.orders.splice(index, 1); // 찾아서 지움
      }
      const delivery = state.deliveries.findIndex(
        v => v.orderId === action.payload,
      );
      if (delivery > -1) {
        state.deliveries.splice(index, 1); // 찾아서 지움
      }
    },
    setCompletes(state, action) {
      state.completes = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default orderSlice;
