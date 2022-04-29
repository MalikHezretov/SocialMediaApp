import {IPhotoModel} from '../../models/photoModel';
import {
  ActionTypes,
  GET_PHOTOS_LIST_FAIL,
  GET_PHOTOS_LIST_LOADING,
  GET_PHOTOS_LIST_SUCCESS,
} from '../actions/types';

type PhotosListState = {
  loading: boolean;
  photosList: IPhotoModel[];
  error: any;
};

const initialState: PhotosListState = {
  photosList: [],
  loading: false,
  error: null,
};

const photosListReducer = (
  state: PhotosListState = initialState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case GET_PHOTOS_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PHOTOS_LIST_SUCCESS:
      if (action.payload.page === 1) {
        return {
          ...state,
          loading: false,
          error: null,
          photosList: action.payload.data,
        };
      }
      return {
        ...state,
        loading: false,
        error: null,
        photosList: [...state.photosList, ...action.payload.data],
      };
    case GET_PHOTOS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default photosListReducer;
