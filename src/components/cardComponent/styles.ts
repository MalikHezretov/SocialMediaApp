import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    paddingTop: 8,
  },
  imageStyle: {
    height: 200,
    borderRadius: 2,
  },
});

export default styles;
