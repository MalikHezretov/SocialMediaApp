import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export interface Props {
  numberOfLikes: number;
}

const LikeComponent = (props: Props) => {
  const {numberOfLikes} = props;

  const rennderCard = () => (
    <View style={styles.likeConatainerStyle}>
      <Image
        style={styles.likeIconStyle}
        source={require('../../common/assets/images/like.png')}
      />
      <Text style={styles.likeNumberStyle}>{numberOfLikes}</Text>
    </View>
  );

  return rennderCard();
};

export default LikeComponent;
