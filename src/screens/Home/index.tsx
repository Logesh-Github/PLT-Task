import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader} from '../../components/reusable-components';
import {useSelector, useDispatch} from 'react-redux';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.cart.name);
  const isLoading = useSelector((state: any) => state.cart.isLoading);

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Text>{name}</Text>
    </View>
  );
};

export default Home;
