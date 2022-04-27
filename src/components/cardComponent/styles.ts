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
  },
  imageStyle: {
    height: 250,
    borderRadius: 8,
  },
});

export default styles;
