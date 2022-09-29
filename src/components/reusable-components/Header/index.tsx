import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Images from '../../../assets/images';
import styles from './styles';

interface IProps {
  title?: string;
  onPressRightBtn: () => void;
  imageSource?: ImageSourcePropType;
  cartCount: number;
}

const Header: React.FC<IProps> = ({
  title,
  imageSource,
  onPressRightBtn,
  cartCount,
}): JSX.Element => {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerSubView}>
        <Text style={styles.titleText}>
          {title ? title : 'PRETTY-ECOM TASK'}
        </Text>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressRightBtn}
            style={styles.rightIconView}>
            <Image
              source={imageSource ? imageSource : Images.cart}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={{alignSelf: 'center'}}>{cartCount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
