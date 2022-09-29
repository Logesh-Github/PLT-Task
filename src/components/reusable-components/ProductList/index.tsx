import React, {useEffect, useState} from 'react';
import {FlatList, Alert} from 'react-native';
import {ProductCard} from '../../reusable-components';
import {ProductsListInterface} from '../../../redux-store/reducers/cart.reducer';

interface IProps {
  data: ProductsListInterface[];
  onPressAddCartBtn: (item: ProductsListInterface, index: number) => void;
}

interface ProductsListItem {
    id: number;
    name: string;
    colour: string;
    img: string;
    price: number;
  }

const ProductList: React.FC<IProps> = ({
    data,
    onPressAddCartBtn
}): JSX.Element => {

  const _renderItem = ({
    item,
    index,
  }: {
    item: ProductsListItem;
    index: number;
  }) => (
    <ProductCard
      onPressAddCartBtn={() => onPressAddCartBtn(item, index)}
      productDetail={item}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item: ProductsListItem) => item.id.toString()}
      numColumns={2}
      renderItem={_renderItem}
      contentContainerStyle={{paddingHorizontal: 5}}
    />
  );
};

export default React.memo(ProductList);
