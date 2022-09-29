import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IProps {
  onPressCard: () => void;
  productDetail: {
    id: number;
  name: string;
  colour: string;
  img: string;
  price: number;
  };
}

const ProductCard: React.FC<IProps> = ({
  onPressCard,
  productDetail,
}): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card]}
      onPress={onPressCard}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);
