import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getPhotosList} from '../../redux/actions/getPhotosListAction';
import {AppState} from '../../redux/reducers';

const Dashboard = (): JSX.Element => {
  // @TODO: fix dispatch type
  const dispatch: any = useDispatch();
  const photosList = useSelector((state: AppState) => state.photosList);
  console.log('photosList: ', photosList);
  useEffect(() => {
    dispatch(getPhotosList());
  }, [dispatch]);
  return <></>;
};

export default Dashboard;
