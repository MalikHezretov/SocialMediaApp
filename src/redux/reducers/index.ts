import {combineReducers} from 'redux';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
  photosList: photosReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
