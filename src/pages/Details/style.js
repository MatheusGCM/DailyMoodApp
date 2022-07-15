import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  return: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    marginTop: 12,
    marginStart: 25,
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  direction: {
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  txtHeader: {
    color: '#969696',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginStart: 3,
    marginBottom: 2,
  },
  img: {
    width: 65,
    height: 65,
  },
  txtHumor: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  mid: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 370,
    height: 158,
    borderRadius: 20,
    marginBottom: 21,
    borderEndWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  midContent: {
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#304FFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },
  txtIcon: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: '#000',
  },
  footer: {
    backgroundColor: 'white',
    width: 370,
    borderRadius: 20,
    paddingVertical: 13,
    alignItems: 'center',
    borderEndWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  txtDescricao: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    color: '#000',
    width: 350,
    padding: 10,
  },
});

export default style;
