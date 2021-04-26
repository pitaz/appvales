import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#2F26D9',
  },
  wrapper: {
    backgroundColor: '#2F26D9',
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: '#7F90A4',
    marginTop: 30,
    fontWeight: '500',
  },
  amount: {
    fontSize: 22,
    color: '#ffffff',
    marginTop: 10,
    fontWeight: '600',
  },
  expenseWrapper: {
    flexDirection: 'row',
  },
  optionWrapper: {
    width: width / 2.4,
    margin: (width / 100) * 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#1AD093',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 6,
    color: '#7F90A4',
  },
  count: {
    fontSize: 18,
    marginBottom: 6,
    color: '#7F90A4',
  },
  transactions: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  transactionsTitle: {
    fontSize: 23,
    fontWeight: '500',
  },
  transactionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#F0F1FE',
    padding: 12,
    borderRadius: 12,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  transactionRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionRowImage: {
    width: 60,
    height: 60,
  },
  transactionRowText: {
    marginLeft: 15,
  },
  notifIcon: {
    width: 30,
    height: 30,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
