import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Images from '../../assets/images';
import {useNetInfo} from '../../hooks/NetInfo';
import {ProductsListInterface} from '../../redux-store/reducers/cart.reducer';

const Cart: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isOnline: boolean | null = useNetInfo();
  const isLoading: boolean = useAppSelector(
    (state: any) => state.cart.isLoading,
  );
  const productList: ProductsListInterface[] = useAppSelector(
    (state: any) => state.cart.productList,
  );
  const cartList: ProductsListInterface[] = useAppSelector(
    (state: any) => state.cart.cartList,
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.imgView}></View>
        <View style={styles.detailsView}>
          <Text numberOfLines={3} style={styles.txt}>
            {'Stone Ribbed Strappy Cut Out Detail Bodycon Dress'}
          </Text>
          <Text style={styles.txt}>{`$4`}</Text>
          <Text style={styles.txt}>{`colour: black`}</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.deleteBtn}>
            <Image
              source={Images.delete}
              style={styles.img}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.counterBtn}>
            <View style={styles.iconView}>
              <Image
                source={Images.decrement}
                style={styles.img}
                resizeMode="contain"
              />
            </View>

            <Text style={{fontSize: 18}}>{'1'}</Text>

            <View style={styles.iconView}>
              <Image
                source={Images.increment}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
