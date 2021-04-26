import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#F0F1FE',
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  searchText: {
    color: 'white',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});
