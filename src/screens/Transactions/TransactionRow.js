import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const TransactionRow = ({data}) => {
  return (
    <View style={styles.transactionRow}>
      <View style={styles.transactionRowLeft}>
        <Image source={data?.icon} style={styles.transactionRowImage} />
        <View style={styles.transactionRowText}>
          <Text>{data?.name}</Text>
          <Text>{data?.store}</Text>
        </View>
      </View>
      <Text>{data?.price}</Text>
    </View>
  );
};

export default TransactionRow;
