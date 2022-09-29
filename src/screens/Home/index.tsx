import React, {useEffect, useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader, Header, ProductList} from '../../components/reusable-components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Images from '../../assets/images';
import {getProducts} from '../../redux-store/actions';
import {useNetInfo} from '../../hooks/NetInfo';
import {ProductsListInterface} from '../../redux-store/reducers/cart.reducer';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isOnline: boolean | null = useNetInfo();
  const isLoading: boolean = useAppSelector((state: any) => state.cart.isLoading);
  const productList: ProductsListInterface[]= useAppSelector((state: any) => state.cart.productList);

  useEffect(() => {
    if (isOnline) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Header
        imageSource={Images.cart}
        onPressRightBtn={() => navigation.navigate('Cart')}
      />
      <ProductList data={productList} />
    </View>
  );
};

export default Home;
