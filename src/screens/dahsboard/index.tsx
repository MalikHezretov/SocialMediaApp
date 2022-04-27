import React, {useEffect} from 'react';
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
  const photosList = useSelector(
    (state: AppState) => state.photosList.photosList,
  );
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getPhotosList());
    // since the api is quite fast we can't see the scrolling effect properly
    // there for adding plus second of waiting time
    wait(1000).then(() => {
      return setRefreshing(false);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPhotosList());
  }, [dispatch]);

  const renderItem: ListRenderItem<IPhotoModel> = ({item}): JSX.Element => {
    return (
      <>
        <CardComponent imageUrl={item.urls.regular} />
        <LikeComponent numberOfLikes={item.likes} />
      </>
    );
  };

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
