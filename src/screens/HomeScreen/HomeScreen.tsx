import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR_CODE} from '../../types/enums';
import getBooks from '../../utils/getBooks';
import Books from '../../components/Books/Books';
import styles from './HomeScreen.styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import searchBooks from '../../utils/searchBooks';
import STRINGS from '../../types/strings';

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const fetchBooks = async () => {
    setLoading(true);
    const resBooks = await getBooks();
    if (resBooks.length > 0) {
      setBooks(resBooks);
      setLoading(false);
    }
  };

  const handleSearch = async (titleString: string) => {
    if (!titleString) {
      return;
    }
    setLoading(true);
    const resBooks = await searchBooks(titleString);
    if (resBooks.length > 0) {
      const tempBooks: Book[] = [];
      resBooks.forEach((book: SearchBook) => {
        const {author_name, cover_i, first_publish_year, title} = book;
        if (author_name && cover_i && first_publish_year && title) {
          tempBooks.push({
            work: {
              author_names: author_name,
              cover_id: cover_i,
              first_publish_year,
              title,
            },
          });
        }
      });
      setBooks(tempBooks);
    }
    setLoading(false);
  };

  const handleReadBook = (index: number) => {
    const tempBooks = [...books];
    const {
      work: {read},
    } = tempBooks[index];
    if (!read) {
      tempBooks[index].work.read = true;
    } else {
      tempBooks[index].work.read = false;
    }

    setBooks(tempBooks);
  };

  useEffect(() => {
    if (!searchInput) {
      fetchBooks();
    }
  }, [searchInput]);

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle="dark-content" backgroundColor={COLOR_CODE.WHITE} />

      <ScrollView
        style={styles.homeContainer}
        contentContainerStyle={styles.homeContentContainer}>
        <Text style={styles.header}>{STRINGS.OPEN_LIBRARY}</Text>
        <SearchBar
          handleSearch={handleSearch}
          setSearchInput={setSearchInput}
        />

        {loading ? (
          <ActivityIndicator
            size="large"
            color={COLOR_CODE.PRIMARY}
            style={styles.loader}
          />
        ) : (
          <Books books={books} handleReadBook={handleReadBook} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
