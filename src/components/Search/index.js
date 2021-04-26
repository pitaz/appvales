import React from 'react';
import {styles} from './styles';
import {View, TextInput, Image} from 'react-native';
import {icons} from '../../assets';

const Search = ({setQuery, style}) => {
  return (
    <View style={{...styles.searchWrapper, ...style}}>
      <Image source={icons.search} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={value => setQuery(value)}
        placeholderTextColor={'#8891A9'}
      />
    </View>
  );
};

export default Search;
