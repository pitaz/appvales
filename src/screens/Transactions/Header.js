import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.transactionsHeader}>
      <Text style={styles.transactionsTitle}>Transactions</Text>
      <TouchableOpacity style={styles.button}>
        <Text>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
