import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    color: '#7F90A4',
  },
  title: {
    fontSize: 27,
    color: '#061756',
    marginBottom: 20,
  },
  optionWrapper: {
    width: width / 2.4,
    margin: (width / 100) * 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#1AD093',
  },
  categoryWrapper: {
    width: width / 2.4,
    margin: (width / 100) * 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#EAEAEE',
    borderWidth: 1,
  },
  categoryIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  category: {
    width: '65%',
    color: '#061756',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginBottom: 30,
  },
  menuIcon: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: -8,
  },
  header: {
    marginBottom: 35,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rightMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    marginBottom: 20,
    marginTop: 20,
  },
  footerTitle: {
    fontSize: 22,
    color: '#061756',
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
    color: '#ffffff',
  },
  count: {
    fontSize: 12,
    marginBottom: 6,
    color: '#ffffff',
  },
  categoryView: {
    flexDirection: 'row',
  },
  avatar: {
    width: 55,
    height: 55,
    marginTop: -8,
  },
  notifWhite: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
