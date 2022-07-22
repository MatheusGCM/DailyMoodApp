import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  return: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    marginTop: 10,
    marginBottom: 55,
    marginStart: 20,
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  txtMain: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45,
    color: '#000',
    marginBottom: 12,
  },
  flexDirection: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '60%',
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#969696',
  },
});
export default styles;
