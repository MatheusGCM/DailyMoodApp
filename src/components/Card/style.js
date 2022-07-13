import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    paddingEnd: 65,
    marginTop: 20,
    borderRadius: 20,
  },
  txtDia: {
    fontSize: 16,
    color: '#ACACAC',
    fontWeight: '400',
    lineHeight: 24,
  },
  txtHumor: {
    fontSize: 24,
    fontWeight: '700',
    marginEnd: 7,
    lineHeight: 36,
  },
  txtHora: {
    fontSize: 14,
    color: '#ACACAC',
    fontWeight: '400',
    lineHeight: 21,
  },
  txtDescricao: {
    fontSize: 13,
    color: '#ACACAC',
    fontWeight: '400',
    lineHeight: 20,
    paddingEnd: '14%',
    paddingStart: '2%',
  },
});

export default styles;
