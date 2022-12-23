import {combineReducers} from 'redux';
import indexSlice from '../slices';

const rootReducer = combineReducers({
  index: indexSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
