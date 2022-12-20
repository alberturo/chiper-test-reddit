import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  card: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  cardBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardBlockLeft: {
    width: '80%',
    padding: '5%',
  },
  cardBlockImg: {
    width: '20%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDate: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  cardBlockLeftTitle: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  subTitleText: {
    color: 'black',
    fontSize: 12,
  },
  cardBlockLeftSemiblock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
