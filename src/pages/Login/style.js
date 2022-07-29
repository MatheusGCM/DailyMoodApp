import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304FFE',
  },
  boxImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemLogin: {
    width: 228,
    height: 228,
  },
  boxFlex: {
    flex: 1,
  },
  boxInputs: {
    height: 113,
    justifyContent: 'space-between',
    marginBottom: 68,
  },
  input: {
    width: 321,
    height: 46,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
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
  },
  txtEntrar: {
    fontSize: 15,
    fontWeight: '700',
    color: '#304FFE',
  },
});

export default styles;
