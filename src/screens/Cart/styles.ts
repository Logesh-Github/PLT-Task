import { StyleSheet, Platform } from 'react-native';
import { Colors, DeviceConfig } from '../../utils';
import { normalize } from '../../utils/FontsCalculation';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: 10
    },
    card: {
        height: Platform.OS === 'ios' ? DeviceConfig.screenHeight / 4 : DeviceConfig.screenHeight / 3.5,
        width: '100%',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        flexDirection: 'row',
        marginBottom: 10
    },
    imgView: {
        width: '35%',
    },
    detailsView: {
        width: '65%',
        padding: 10,
    },
    img: {
        height: '100%',
        width: '100%'
    },
    txt: {
        fontSize: normalize(16),
        marginBottom: 5
    },
    deleteBtn: {
        height: 50,
        width: 50,
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    counterBtn: {
        height: 40,
        width: 150,
        alignSelf: 'flex-end',
        marginRight: 10,
        backgroundColor: '#DDDBDA',
        marginTop: 10,
        borderRadius: 40 / 2,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView: { height: 30, width: 30 },
    emptyView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    homeBtn: { width: 120, height: 40, borderRadius: 40 / 2, backgroundColor: '#DDDBDA', marginVertical: 20, justifyContent: 'center', alignItems: 'center' }
});

export default styles;
