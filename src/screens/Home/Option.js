import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Option = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('transactions')}
      style={{...styles.optionWrapper, backgroundColor: data?.color}}>
      <Image source={data?.icon} style={styles.image} />
      <Text style={styles.label}>{data?.name}</Text>
      <Text style={styles.count}>{data?.count} Items</Text>
    </TouchableOpacity>
  );
};

export default Option;
