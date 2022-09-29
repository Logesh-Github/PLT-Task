import React, {FunctionComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from '../../../utils';

const CustomLoader: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size={'large'} color={Colors.white} />
    </View>
  );
};

export default CustomLoader;
