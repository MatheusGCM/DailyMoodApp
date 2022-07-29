import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  close: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    marginTop: 32,
    marginBottom: 55,
    marginStart: 32,
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
  },
  txt: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#000',
    marginBottom: 46,
  },
  boxBtn: {
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 52,
    borderRadius: 6,
    backgroundColor: '#304FFE',
  },
  txtButton: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    color: 'white',
  },
});
export default styles;
