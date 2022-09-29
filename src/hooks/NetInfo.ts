import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetInfo = (): boolean | null => {
    const [isOnline, setIsOnline] = useState<boolean | null>(true);

  useEffect(() => {
      const subscribeNetwork = NetInfo.addEventListener(state => {
          setIsOnline(state.isConnected);
      });
      return () => {
          subscribeNetwork();
      }
  }, [NetInfo])

  return isOnline;
}
