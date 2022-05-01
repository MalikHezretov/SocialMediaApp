import {useCallback, useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getPhotosList} from '../../redux/actions/getPhotosListAction';
import {AppState} from '../../redux/reducers';
import {wait} from './helper';
import renderFlatList from './renderFlatlist';

const Dashboard = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const photosList = useSelector(({state}: AppState) => state.photosList);
  const loading = useSelector(({state}: AppState) => state.loading);
  const [refreshing, setRefreshing] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [momentum, setMomentum] = useState(true);

  const fetchPhotos = useCallback(() => {
    dispatch(getPhotosList(pageNumber));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const onRefresh = useCallback(() => {
    setPageNumber(1);
    setRefreshing(true);
    fetchPhotos();
    wait(1000).then(() => {
      return setRefreshing(false);
    });
  }, [fetchPhotos]);

  const fetchMorePhotos = () => {
    if (!momentum && !loading) {
      setPageNumber(pageNumber + 1);
      fetchPhotos();
      wait(1000).then(() => {
        return setMomentum(true);
      });
    }
  };

  const onMomentumScrollBegin = () => setMomentum(false);

  const renderFeed: JSX.Element = renderFlatList(
    photosList,
    refreshing,
    onRefresh,
    fetchMorePhotos,
    onMomentumScrollBegin,
    loading,
  );

  return renderFeed;
};

export default Dashboard;
