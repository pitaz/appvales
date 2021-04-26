import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../assets';
import Card from './Card';
import Header from './Header';
import {styles} from './styles';
import TransactionRow from './TransactionRow';
import VirtualizedView from '../../components/VirtualisedList';
const data = [
  {
    id: 1,
    name: 'Car purchase',
    store: 'Auto Loan',
    price: '-$280',
    icon: icons.car,
  },
  {
    id: 2,
    name: 'House purchase',
    store: 'Auto Loan',
    price: '$2250',
    icon: icons.home,
  },
  {
    id: 3,
    name: 'Transport',
    store: 'Uber, Pathao',
    price: '$250',
    icon: icons.gift,
  },
  {
    id: 4,
    name: 'Shopping',
    store: 'Wish, Apple',
    price: '$350',
    icon: icons.bag,
  },
];

const Transactions = () => {
  const navigation = useNavigation();
  return (
    <VirtualizedView>
      <View style={styles.pageWrapper}>
        <View style={styles.wrapper}>
          <View style={styles.topMenu}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.back} />
            </TouchableOpacity>
            <Image source={icons.notifBlue} style={styles.notifIcon} />
          </View>
          <Text style={styles.title}>Your Balance</Text>
          <Text style={styles.amount}>$547,000.00</Text>
          <View style={styles.expenseWrapper}>
            <Card
              cost={'5,000'}
              icon={icons.coinNetwork}
              label={'Expense'}
              backgroundColor="#C4F2FF"
            />
            <Card
              cost={'15,000'}
              label={'Spend to Goals'}
              icon={icons.piggyCoin}
              backgroundColor="#FFE6D7"
            />
          </View>
        </View>
        <View style={styles.transactions}>
          <FlatList
            ListHeaderComponent={() => <Header navigation={navigation} />}
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <TransactionRow data={item} index={index} />
            )}
          />
        </View>
      </View>
    </VirtualizedView>
  );
};

export default Transactions;
