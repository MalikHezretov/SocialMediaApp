import {IPhotoModel} from '../../models/photoModel';

export const INITIAL_NUM_TO_RENDER = 10;

export const ON_END_REACHED_THRESHOLD = 0.1;

export const DEBOUNCE_WAIT_TIME_MS = 500;

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const itemKey = (item: IPhotoModel, index: number) =>
  item.id + index.toString();
