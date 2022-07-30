import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activitiesItem: {
    margin: 25,
    alignItems: 'center',
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxActivitiesText: {
    width: 60,
    alignItems: 'center',
    paddingTop: 5,
  },
  activitiesText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    color: '#000',
    textAlign: 'center',
  },
});

export default styles;
