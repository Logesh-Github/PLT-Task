import React, {useEffect, FunctionComponent} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader, Header, ProductList} from '../../components/reusable-components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Images from '../../assets/images';
import {getProducts, addProductToCart} from '../../redux-store/actions';
import {useNetInfo} from '../../hooks/NetInfo';
import {ProductsListInterface} from '../../redux-store/reducers/cart.reducer';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isOnline: boolean | null = useNetInfo();
  const isLoading: boolean = useAppSelector((state: any) => state.cart.isLoading);
  const productList: ProductsListInterface[]= useAppSelector((state: any) => state.cart.productList);
  const cartList: ProductsListInterface[]= useAppSelector((state: any) => state.cart.cartList);

  useEffect(() => {
    if (isOnline) {
      dispatch(getProducts());
    } else {
      Alert.alert("Check internet connection!");
    }
  }, []);

  const handleAddToCart: Function = (item: ProductsListInterface, index: number) => {
    dispatch(addProductToCart(item, index));
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Header
        imageSource={Images.cart}
        onPressRightBtn={() => navigation.navigate('Cart')}
        cartCount={cartList.length}
      />
      <ProductList data={productList} onPressAddCartBtn = {(item: ProductsListInterface, index: number) => handleAddToCart(item, index)} />
    </View>
  );
};

export default Home;
