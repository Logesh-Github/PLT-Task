import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader, Header} from '../../components/reusable-components';
import {useSelector, useDispatch} from 'react-redux';
import Images from '../../assets/images';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.cart.name);
  const isLoading = useSelector((state: any) => state.cart.isLoading);

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Header imageSource={Images.cart} onPressRightBtn={() => navigation.navigate("Cart")} />
      <Text>{name}</Text>
    </View>
  );
};

export default Home;
