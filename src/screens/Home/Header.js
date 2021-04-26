import React from 'react';
import {View, Text, Image} from 'react-native';
import {icons} from '../../assets';
import Search from '../../components/Search';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.topMenu}>
        <Image source={icons.menu} style={styles.menuIcon} />
        <View style={styles.rightMenu}>
          <Image source={icons.notifWhite} style={styles.notifWhite} />
          <Image source={icons.avatar} style={styles.avatar} />
        </View>
      </View>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.title}>Creative Mints</Text>
      <Search />
    </View>
  );
};

export default Header;
