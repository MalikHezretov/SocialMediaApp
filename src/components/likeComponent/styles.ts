import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  likeConatainerStyle: ViewStyle;
  likeIconStyle: ImageStyle;
  likeNumberStyle: TextStyle;
}

const styles: Styles = StyleSheet.create({
  likeConatainerStyle: {
    flexDirection: 'row',
  },
  likeIconStyle: {
    height: 25,
    width: 25,
    marginTop: 12,
    marginLeft: 32,
  },
  likeNumberStyle: {
    marginTop: 17,
    marginLeft: 4,
    fontWeight: '700',
  },
});

export default styles;
