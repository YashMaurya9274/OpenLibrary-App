import {StyleSheet} from 'react-native';
import {COLOR_CODE} from '../../types/enums';

const styles = StyleSheet.create({
  bookCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
  },
  bookCoverImage: {
    height: '100%',
    width: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bookCardRightContainer: {
    paddingVertical: 15,
    flex: 1,
    gap: 2,
  },
  bookTitle: {
    fontSize: 15,
    color: COLOR_CODE.BLACK,
  },
  bookAuthor: {
    fontSize: 13,
    color: COLOR_CODE.GRAY_1,
  },
  bookPublished: {
    fontSize: 11,
    color: COLOR_CODE.GRAY,
  },
  button: {
    marginTop: 15,
    marginRight: 'auto',
    paddingHorizontal: 15,
    height: 25,
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
