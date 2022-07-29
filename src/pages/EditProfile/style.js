import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 56,
  },
  boxHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  img: {
    width: 128,
    height: 128,
    marginBottom: 41,
  },
  btnChangeImg: {
    width: 182,
    height: 44,
    backgroundColor: 'rgba(48, 79, 254, 0.14)',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#BFC6F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
  },
  txtBtnChangeImg: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    color: '#304FFE',
  },
  marginBottom: {
    marginBottom: 35,
  },
  centralizedModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxModal: {
    backgroundColor: '#fff',
    width: '70%',
    height: 120,
    justifyContent: 'space-around',
    borderRadius: 6,
  },
  boxBtnModal: {
    borderColor: 'rgba(0,0,0,0.3)',
  },
  btnModal: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  btnModalTxt: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 19,
    color: '#000',
  },
});

export default styles;
