import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';
import CardComponent from '../../components/cardComponent';
import LikeComponent from '../../components/likeComponent';
import TextComponent from '../../components/textComponent';
import {IPhotoModel} from '../../models/photoModel';
import {
  INITIAL_NUM_TO_RENDER,
  itemKey,
  ON_END_REACHED_THRESHOLD,
} from './helper';
import styles from './styles';

const renderItem: ListRenderItem<IPhotoModel> = ({item}): JSX.Element => {
  return (
    <>
      <TextComponent description={item.description} />
      <CardComponent imageUrl={item.urls.regular} />
      <LikeComponent numberOfLikes={item.likes} />
    </>
  );
};

const renderFooter = (loading: boolean): JSX.Element | null => {
  if (loading) {
    return null;
  }

  return <ActivityIndicator />;
};

const renderFlatList = (
  photosList: IPhotoModel[],
  refreshing: boolean,
  onRefresh: () => void,
  fetchMorePhotos: () => void,
  onMomentumScrollBegin: () => void,
  loading: boolean,
) => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={photosList}
      renderItem={renderItem}
      keyExtractor={itemKey}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
      onEndReached={fetchMorePhotos}
      initialNumToRender={INITIAL_NUM_TO_RENDER}
      ListFooterComponent={renderFooter(loading)}
      onMomentumScrollBegin={onMomentumScrollBegin}
    />
  </SafeAreaView>
);

export default renderFlatList;
