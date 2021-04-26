import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import Option from './Option';
import Header from './Header';
import Footer from './Footer';
import {data} from './fixtures';

const numColumns = 2;
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapper}>
        <FlatList
          ListHeaderComponent={() => <Header navigation={navigation} />}
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => <Option data={item} index={index} />}
          ListFooterComponent={Footer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
