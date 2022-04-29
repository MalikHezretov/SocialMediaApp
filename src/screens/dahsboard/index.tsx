import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CardComponent from '../../components/cardComponent';
import LikeComponent from '../../components/likeComponent';
import {IPhotoModel} from '../../models/photoModel';
import {getPhotosList} from '../../redux/actions/getPhotosListAction';
import {AppState} from '../../redux/reducers';
import styles from './styles';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Dashboard = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const photosList = useSelector(({state}: AppState) => state.photosList);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPhotos = useCallback(() => {
    dispatch(getPhotosList(page));
  }, [dispatch, page]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const renderItem: ListRenderItem<IPhotoModel> = ({item}): JSX.Element => {
    return (
      <>
        <CardComponent imageUrl={item.urls.regular} />
        <LikeComponent numberOfLikes={item.likes} />
      </>
    );
  };

  const onRefresh = useCallback(() => {
    setPage(1);
    setRefreshing(true);
    fetchPhotos();
    wait(1000).then(() => {
      return setRefreshing(false);
    });
  }, [fetchPhotos]);

  const renderFlatList = () => (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photosList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );

  return renderFlatList();
};

export default Dashboard;
