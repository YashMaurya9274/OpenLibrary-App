import {Platform, StyleSheet} from 'react-native';
import {COLOR_CODE} from '../../types/enums';

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_CODE.COMPLEMENTARY,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginRight: 5,
    padding: Platform.OS === 'android' ? 0 : 3,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLOR_CODE.GRAY,
  },
});

export default styles;
