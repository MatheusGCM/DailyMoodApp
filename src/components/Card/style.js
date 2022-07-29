import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'white',
    paddingStart: 15,
    paddingVertical: 18,
    // paddingEnd: 65,
    borderRadius: 20,
  },
  cardCima: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardImg: {
    width: 57,
    height: 57,
    marginEnd: 16,
  },
  txtDia: {
    fontSize: 16,
    color: '#ACACAC',
    fontWeight: '400',
    lineHeight: 24,
  },
  cardCimaContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
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
    // paddingEnd: '17%',
    // paddingStart: '2%',
    marginTop: 12,
  },
});

export default styles;
