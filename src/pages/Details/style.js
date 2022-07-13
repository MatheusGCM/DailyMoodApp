import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  back: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    backgroundColor: '#DEE1F2',
    marginTop: 12,
    marginStart: 25,
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  txtHeader: {
    color: '#969696',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
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
