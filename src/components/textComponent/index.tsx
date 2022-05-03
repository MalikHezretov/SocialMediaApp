import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface Props {
  title?: string;
  description: string;
}

const TextComponent = (props: Props) => {
  const {title = 'Title', description} = props;

  const rennderCard = () => (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text numberOfLines={1}>{description}</Text>
    </View>
  );

  return rennderCard();
};

export default TextComponent;
