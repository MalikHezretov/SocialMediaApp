import {IPhotoModel} from '../../models/photoModel';

export const GET_PHOTOS_LIST = 'GET_PHOTOS_LIST';

export interface GetPhotosListAction {
  type: typeof GET_PHOTOS_LIST;
  payload: IPhotoModel[];
}

export type ActionTypes = GetPhotosListAction;
