import {GET_PHOTOS_LIST} from './types';
import axios from 'axios';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppState} from '../reducers';

export type DispatchFunction = (dispatch: Dispatch) => void;

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, Action<string>>
>;

export const getPhotosList =
  (): DispatchFunction =>
  async (dispatch): Promise<void> => {
    try {
      const result = await axios.get('https://api.unsplash.com/photos?page=1', {
        headers: {
          Authorization:
            'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc',
        },
      });

      dispatch({
        type: GET_PHOTOS_LIST,
        payload: result.data,
      });
    } catch (e) {
      console.log('catched: ', e);
    }
  };
