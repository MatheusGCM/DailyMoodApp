import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    color: '#000',
    marginBottom: 7,
  },
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    paddingStart: 15,
    marginBottom: 7,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 19,
    color: '#000',
  },
  btnSelect: {
    marginEnd: 12,
  },
});

export default styles;
