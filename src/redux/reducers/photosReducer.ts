import {IPhotoModel} from '../../models/photoModel';
import {ActionTypes, GET_PHOTOS_LIST} from '../actions/types';

type PhotosListState = {
  photosList: IPhotoModel[];
};

const initialState: PhotosListState = {
  photosList: [],
};

const photosListReducer = (
  state: PhotosListState = initialState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case GET_PHOTOS_LIST:
      return {
        ...state,
        photosList: [...action.payload],
      };
    default:
      return state;
  }
};

export default photosListReducer;
