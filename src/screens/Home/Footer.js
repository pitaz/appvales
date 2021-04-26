import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../assets';
import {styles} from './styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>Choose a category</Text>
      <View style={styles.categoryView}>
        <TouchableOpacity style={styles.categoryWrapper}>
          <Image source={icons.building} style={styles.categoryIcon} />
          <Text style={styles.category}>Branch services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryWrapper}>
          <Image source={icons.card} style={styles.categoryIcon} />
          <Text style={styles.category}>Make a payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
