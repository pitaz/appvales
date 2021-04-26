import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Card = ({cost, label, backgroundColor, icon}) => {
  return (
    <TouchableOpacity
      style={{...styles.optionWrapper, backgroundColor: backgroundColor}}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.label}>${cost}</Text>
      <Text style={styles.count}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Card;
