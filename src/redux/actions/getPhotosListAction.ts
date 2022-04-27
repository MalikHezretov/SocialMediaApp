import {GET_PHOTOS_LIST} from './types';
import axios from 'axios';
import {Dispatch} from 'redux';

export type DispatchFunction = (dispatch: Dispatch) => void;

export const getPhotosList =
  (listNumber: number = 1): DispatchFunction =>
  async (dispatch): Promise<void> => {
    try {
      const result = await axios.get(
        `https://api.unsplash.com/photos?page=${listNumber}`,
        {
          headers: {
            Authorization:
              'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc',
          },
        },
      );

      dispatch({
        type: GET_PHOTOS_LIST,
        payload: result.data,
      });
    } catch (e) {
      console.log('catched: ', e);
    }
  };
