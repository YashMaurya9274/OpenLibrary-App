/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {COLOR_CODE} from '../../types/enums';
import styles from './BookCard.styles';
import STRINGS from '../../types/strings';

type Props = {
  book: Book;
  handleReadBook: () => void;
};

const BookCard = ({book, handleReadBook}: Props) => {
  const {
    work: {author_names, first_publish_year, title, cover_id, read},
  } = book;

  const imageURL = useMemo(() => {
    return `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
  }, [cover_id]);

  return (
    <>
      {title && (
        <View style={styles.bookCardContainer}>
          <Image
            source={{
              uri: imageURL,
            }}
            resizeMode="stretch"
            style={styles.bookCoverImage}
          />
          <View style={styles.bookCardRightContainer}>
            <Text style={styles.bookTitle}>{title}</Text>
            <Text style={styles.bookAuthor}>
              {STRINGS.BY} {author_names[0]}
            </Text>

            <Text style={styles.bookPublished}>
              {STRINGS.PUBLISHED_ON} {first_publish_year}
            </Text>

            <TouchableOpacity
              onPress={handleReadBook}
              style={[
                styles.button,
                {
                  backgroundColor: !read ? COLOR_CODE.GREEN : COLOR_CODE.WHITE,
                  borderWidth: read ? 1 : 0,
                  borderColor: read ? COLOR_CODE.GREEN : '',
                },
              ]}>
              <Text
                style={{
                  color: !read ? COLOR_CODE.WHITE : COLOR_CODE.GREEN,
                }}>
                {read ? STRINGS.UNREAD : STRINGS.READ}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default BookCard;
