import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
  },
  img: {
    width: 128,
    height: 128,
    marginTop: 50,
    marginBottom: 47,
  },
  txtMain: {
    color: '#000',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 45,
    marginBottom: 25,
  },
  boxDados: {
    width: '100%',
    marginBottom: 30,
  },
  txtDados: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 19,
    color: '#000',
  },
  txtDadosBold: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    color: '#000',
  },
  buttonSair: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 52,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    marginTop: 16,
  },
  txtButtonSair: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 19,
  },
});

export default styles;
