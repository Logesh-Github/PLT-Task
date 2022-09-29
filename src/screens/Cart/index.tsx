import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Images from '../../assets/images';
import {useNetInfo} from '../../hooks/NetInfo';
import {ProductsListInterface} from '../../redux-store/reducers/cart.reducer';
import {
  deleteFromCart,
  increaseProductQty,
  decreaseProductQty,
} from '../../redux-store/actions';

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

  const handleDeleteProduct: Function = (
    item: ProductsListInterface,
    index: number,
  ) => {
    dispatch(deleteFromCart(item, index));
  };

  const handleIncreaseProductQty: Function = (
    item: ProductsListInterface,
    index: number,
  ) => {
    dispatch(increaseProductQty(item, index));
  };

  const handleDecreaseProductQty: Function = (
    item: ProductsListInterface,
    index: number,
  ) => {
    if (item.productCount !== undefined) {
      if (item.productCount > 1) {
        dispatch(decreaseProductQty(item, index));
      }
    }
  };

  const _renderItem = ({
    item,
    index,
  }: {
    item: ProductsListInterface;
    index: number;
  }) => {
    return (
      <View style={styles.card} key={index.toString()}>
        <View style={styles.imgView}>
          <Image
            source={{uri: item.img}}
            style={styles.img}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.detailsView}>
          <Text numberOfLines={3} style={styles.txt}>
            {item.name}
          </Text>
          <Text style={styles.txt}>{`$ ${item.price}`}</Text>
          <Text style={styles.txt}>{`colour: ${item.colour}`}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.deleteBtn}
            onPress={() => handleDeleteProduct(item, index)}>
            <Image
              source={Images.delete}
              style={styles.img}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.counterBtn}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconView}
              onPress={() => handleDecreaseProductQty(item, index)}>
              <Image
                source={Images.decrement}
                style={styles.img}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={{fontSize: 18}}>{item.productCount}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.iconView}
              onPress={() => handleIncreaseProductQty(item, index)}>
              <Image
                source={Images.increment}
                style={styles.img}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const _renderEmptyUI = () => (
    <View style={styles.emptyView}>
      <Text>{'Shopping Cart is empty'}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={cartList}
        keyExtractor={(item: ProductsListInterface) => item.id.toString()}
        renderItem={_renderItem}
        ListEmptyComponent={_renderEmptyUI}
      />
    </View>
  );
};

export default Cart;
