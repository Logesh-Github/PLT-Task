import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Cart: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={styles.mainContainer}>
      <Text>This is Cart page</Text>
    </View>
  );
};

export default Cart;
