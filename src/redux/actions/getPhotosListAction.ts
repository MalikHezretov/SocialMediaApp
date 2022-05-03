import {
  GET_PHOTOS_LIST_FAIL,
  GET_PHOTOS_LIST_LOADING,
  GET_PHOTOS_LIST_SUCCESS,
} from './types';
import axios from 'axios';
import {Dispatch} from 'redux';

export type DispatchFunction = (dispatch: Dispatch) => void;

export const getPhotosList =
  (pageNumber: number): DispatchFunction =>
  async (dispatch): Promise<void> => {
    dispatch({
      type: GET_PHOTOS_LIST_LOADING,
    });
    try {
      const result = await axios.get(
        `https://api.unsplash.com/photos?page=${pageNumber}`,
        {
          headers: {
            Authorization:
              'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc',
          },
        },
      );

      dispatch({
        type: GET_PHOTOS_LIST_SUCCESS,
        payload: {
          data: result.data,
          page: pageNumber,
        },
      });
    } catch (e) {
      dispatch({
        type: GET_PHOTOS_LIST_FAIL,
        error: e,
      });
    }
  };
