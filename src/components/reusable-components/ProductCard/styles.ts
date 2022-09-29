import { StyleSheet } from 'react-native';
import { Colors, DeviceConfig } from '../../../utils';
import { normalize } from '../../../utils/FontsCalculation';

const styles = StyleSheet.create({
    card: {
        height: DeviceConfig.screenHeight / 4 + 25,
        width: DeviceConfig.screenWidth / 2 - 15,
        marginHorizontal: 5,
        marginVertical: 8,
        borderRadius: 10,
    },
    productNameTxt: {
        fontSize: normalize(14),
        color: Colors.white,
        fontWeight: 'bold',
    },
    mainView: { flex: 1, borderRadius: 10, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.lightGrey },
    productImageView: {
        height: '65%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    productDetailView: { height: '35%', backgroundColor: Colors.black, borderRadius: 10, opacity: 0.9 },
    productDetailSubView: { flex: 1, flexDirection: 'row', borderRadius: 10 },
    productTxtView: {
        width: '90%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 5,
        marginLeft: 3
    },
    editImage: { height: '100%', width: '100%' },
    cartBtn: {height: 30, width: 100, alignSelf: 'flex-end', marginRight: 10, marginBottom: 5, borderWidth: 1, borderRadius: 5, borderColor: Colors.white, justifyContent: 'center', alignItems: 'center'},
    cartBtnTxt: {fontSize: 15, color: 'white'}
});

export default styles;
