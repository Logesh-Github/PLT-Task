import React, {useState, FunctionComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomLoader} from '../../components/reusable-components';

const Home: FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View style={styles.mainContainer}>
      {isLoading && <CustomLoader />}
      <Text>This is home page</Text>
    </View>
  );
};

export default Home;
