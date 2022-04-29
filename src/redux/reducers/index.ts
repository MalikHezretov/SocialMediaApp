import {combineReducers} from 'redux';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
  state: photosReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
