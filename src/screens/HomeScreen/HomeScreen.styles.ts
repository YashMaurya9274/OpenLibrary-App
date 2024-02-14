import {StyleSheet} from 'react-native';
import {COLOR_CODE} from '../../types/enums';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: COLOR_CODE.WHITE,
  },
  homeContainer: {
    flex: 1,
  },
  homeContentContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: COLOR_CODE.BLACK,
    fontWeight: '500',
  },
  loader: {
    marginTop: 200,
  },
});

export default styles;
