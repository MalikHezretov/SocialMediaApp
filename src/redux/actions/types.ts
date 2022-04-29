import {IPhotoModel} from '../../models/photoModel';

export const GET_PHOTOS_LIST_LOADING = 'GET_PHOTOS_LIST_LOADING';
export const GET_PHOTOS_LIST_SUCCESS = 'GET_PHOTOS_LIST_SUCCESS';
export const GET_PHOTOS_LIST_FAIL = 'GET_PHOTOS_LIST_FAIL';

export interface GetPhotosListActionRequest {
  type: typeof GET_PHOTOS_LIST_LOADING;
}

export interface GetPhotosListActionSuccess {
  type: typeof GET_PHOTOS_LIST_SUCCESS;
  payload: {
    data: IPhotoModel[];
    page: number;
  };
}

export interface GetPhotosListActionFail {
  type: typeof GET_PHOTOS_LIST_FAIL;
  error: any;
}

export type ActionTypes =
  | GetPhotosListActionRequest
  | GetPhotosListActionSuccess
  | GetPhotosListActionFail;
