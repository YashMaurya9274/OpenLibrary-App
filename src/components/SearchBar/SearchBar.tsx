import {View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './SearchBar.styles';
import Imagelinks from '../../assets/images';
import STRINGS from '../../types/strings';

type Props = {
  handleSearch: (title: string) => Promise<void>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({handleSearch, setSearchInput}: Props) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={STRINGS.SEARCH_BY_TITLE}
        style={styles.input}
        onEndEditing={e => {
          setSearchInput(e.nativeEvent.text);
          handleSearch(e.nativeEvent.text);
        }}
      />
      <Image source={Imagelinks.search} style={styles.icon} />
    </View>
  );
};

export default SearchBar;
