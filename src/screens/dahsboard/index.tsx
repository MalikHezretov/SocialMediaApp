import React, {useEffect} from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CardComponent from '../../components/cardComponent';
import {IPhotoModel} from '../../models/photoModel';
import {getPhotosList} from '../../redux/actions/getPhotosListAction';
import {AppState} from '../../redux/reducers';
import styles from './styles';

const Dashboard = (): JSX.Element => {
  const dispatch: any = useDispatch();
  const photosList = useSelector(
    (state: AppState) => state.photosList.photosList,
  );

  useEffect(() => {
    dispatch(getPhotosList());
  }, [dispatch]);

  const renderItem: ListRenderItem<IPhotoModel> = ({item}): JSX.Element => {
    return <CardComponent imageUrl={item.urls.regular} />;
  };

  const renderFlatList = () => (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photosList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );

  return renderFlatList();
};

export default Dashboard;
