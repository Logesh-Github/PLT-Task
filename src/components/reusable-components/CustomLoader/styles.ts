import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loaderView: {
        position: 'absolute', backgroundColor: 'black', opacity: 0.7, justifyContent: 'center', alignItems: 'center', top: 0,
        bottom: 0,
        left: 0,
        right: 0, zIndex: 1
    }
});

export default styles;
