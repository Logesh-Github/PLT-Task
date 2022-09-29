import React, {useEffect, useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader, Header} from '../../components/reusable-components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Images from '../../assets/images';
import {getProducts} from '../../redux-store/actions';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: any) => state.cart.isLoading);
  const productList = useAppSelector((state: any) => state.cart.productList);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Header imageSource={Images.cart} onPressRightBtn={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default Home;
