import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
  },
  areaExit: {
    width: '100%',
    flex: 1,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '91%',
    paddingHorizontal: 30,
    paddingVertical: 27,
  },
  modalTxtHeader: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#000',
    marginBottom: 6,
  },
  modalTxtMid: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    color: '#969696',
    marginBottom: 48,
  },
  modalContainerFooter: {
    alignItems: 'flex-end',
  },
  modalContentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
  },
  modalTxtFooter: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    color: '#000',
  },
});

export default styles;
