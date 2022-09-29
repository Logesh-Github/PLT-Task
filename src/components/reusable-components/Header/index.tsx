import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageSourcePropType} from 'react-native';
import Images from '../../../assets/images';
import styles from './styles';

interface IProps {
  title?: string;
  onPressRightBtn: () => void;
  imageSource?: ImageSourcePropType;
}

const Header: React.FC<IProps> = ({title, imageSource, onPressRightBtn}): JSX.Element => {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerSubView}>
        <Text style={styles.titleText}>{title ? title : "PRETTY-ECOM TASK"}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressRightBtn}  style={styles.rightIconView}>
          <Image
            source={imageSource ? imageSource : Images.cart}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
