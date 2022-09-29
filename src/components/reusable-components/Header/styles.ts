import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils';
import { normalize } from '../../../utils/FontsCalculation';

const styles = StyleSheet.create({
  headerView: {
    height: 60,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  headerSubView: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rightIconView: { height: 30, width: 30, marginRight: 25 },
  titleText: {
    fontSize: normalize(22),
    color: Colors.black,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 10
  },
});

export default styles;
