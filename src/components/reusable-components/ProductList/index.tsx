import React from 'react';
import {FlatList, View, Text} from 'react-native';
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

  const _renderEmptyUI = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{"No items to show"}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item: ProductsListItem) => item.id.toString()}
      numColumns={2}
      renderItem={_renderItem}
      contentContainerStyle={{paddingHorizontal: 5}}
      ListEmptyComponent={_renderEmptyUI}
    />
  );
};

export default React.memo(ProductList);
