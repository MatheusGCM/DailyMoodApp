import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304FFE',
  },
  imagemLogin: {
    width: 228,
    height: 228,
    marginBottom: 58,
  },
  inputLogin: {
    width: 321,
    height: 46,
    backgroundColor: '#F6F6F6',
    marginBottom: 21,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: 20,
    color: 'black',
  },
  btnEntrar: {
    width: 140,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    marginTop: 47,
  },
  txtEntrar: {
    fontSize: 15,
    fontWeight: '700',
    color: '#304FFE',
  },
});

export default styles;
