import { Slot, router, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => {
          setTimeout(resolve, 3000);
        });
      } catch (e) {
        console.warn('e', e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // SplashScreen.hideAsync();
      console.log(`router.replace('/test');`);
      router.replace('/test');
    }
  }, [appIsReady]);

  return (
    <>
      <View 
        className="w-full h-full flex relative bg-blue-200">
        {
          appIsReady ? 
          <View className='w-full h-full flex flex-wrap justify-start items-start relative'>
            <Slot /> 
          </View> 
          : 
          // splace screen
          <View className='w-full h-full flex justify-center items-center relative'>
            <Text>Splash Page..</Text>
          </View>
        }
      </View>
    </>
  );
}