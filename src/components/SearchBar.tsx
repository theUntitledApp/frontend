import React, { FunctionComponent, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '@components/colors';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.beigeDark,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default SearchBar;
