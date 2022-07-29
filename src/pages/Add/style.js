import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  close: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    marginTop: 20,
    marginBottom: 35,
    marginStart: 20,
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  txtMain: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 45,
    color: '#000',
    marginBottom: 12,
  },
  flexDirection: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '60%',
  },
  boxMood: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    alignSelf: 'center',
  },
  boxAtividade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    marginBottom: 20,
  },
  boxInput: {
    width: '90%',
    height: 90,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  boxButton: {
    width: '90%',
    alignSelf: 'center',
  },
});
export default styles;
