import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export interface Props {
  imageUrl: string;
}

const CardComponent = (props: Props) => {
  const {imageUrl} = props;

  const rennderCard = () => (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.imageStyle} />
    </View>
  );

  return rennderCard();
};

export default CardComponent;
