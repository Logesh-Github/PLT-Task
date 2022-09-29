import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IProps {
  onPressAddCartBtn: () => void;
  productDetail: {
    id: number;
  name: string;
  colour: string;
  img: string;
  price: number;
  };
}

const ProductCard: React.FC<IProps> = ({
    onPressAddCartBtn,
  productDetail,
}): JSX.Element => {
  return (
    <View
      style={[styles.card]}>
      <View style={styles.mainView}>
        <View style={styles.productImageView}>
          <Image source={{uri: productDetail.img}} style={[styles.editImage, {borderTopLeftRadius: 10, borderTopRightRadius: 10}]} resizeMode="contain" />
        </View>
        <View style={[styles.productDetailView]}>
          <View style={styles.productDetailSubView}>
            <View style={styles.productTxtView}>
              <Text numberOfLines={1} style={styles.productNameTxt}>
                {productDetail.name}
              </Text>
              <Text style={[styles.productNameTxt, {marginTop: 3}]}>
                {`$${productDetail.price}`}
              </Text>
            </View>
          </View>
      <TouchableOpacity onPress={onPressAddCartBtn} activeOpacity={0.7} style={styles.cartBtn}>
          <Text style={styles.cartBtnTxt}>Add To Cart</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProductCard);
