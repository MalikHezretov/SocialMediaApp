import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  likeConatainerStyle: ViewStyle;
  likeIconStyle: ImageStyle;
  likeNumberStyle: TextStyle;
}

const styles: Styles = StyleSheet.create({
  likeConatainerStyle: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  likeIconStyle: {
    height: 25,
    width: 25,
    marginTop: 8,
    marginLeft: 32,
  },
  likeNumberStyle: {
    marginTop: 13,
    marginLeft: 4,
    fontWeight: '700',
  },
});

export default styles;
