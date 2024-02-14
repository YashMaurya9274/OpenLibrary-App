import {FlatList, Text} from 'react-native';
import React from 'react';
import BookCard from '../Book/BookCard';
import styles from './Books.styles';
import STRINGS from '../../types/strings';

type Props = {
  books: Book[];
  handleReadBook: (index: number) => void;
};

const Books = ({books, handleReadBook}: Props) => {
  return (
    <FlatList
      data={books}
      showsVerticalScrollIndicator={false}
      style={styles.booksContainer}
      ListHeaderComponent={
        <Text style={styles.listHeader}>{STRINGS.BOOKS}</Text>
      }
      keyExtractor={(_, index: number) => index.toString()}
      renderItem={({item, index}: {item: Book; index: number}) => (
        <BookCard
          key={index.toString()}
          book={item}
          handleReadBook={() => handleReadBook(index)}
        />
      )}
    />
  );
};

export default Books;
