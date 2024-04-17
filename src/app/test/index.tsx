import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";

export default function Page() {
  return (
    <>
      <View className='w-full h-full flex flex-col items-center justify-start relative bg-slate-300'>
        <StatusBar style="auto" />
        <ScrollView 
          className='inline-flex min-h-[100px] max-h-[100px] flex-row bg-purple-500 flex-nowrap w-full' 
          horizontal={true}
          overScrollMode="never"
          removeClippedSubviews={true}
          renderToHardwareTextureAndroid={true}
          >
          <View className='inline-flex flex-row bg-yellow-200 flex-nowrap box-border p-1'>
            <Text className='inline-flex bg-blue-200 w-[600px]'>test! 1</Text>
            <Text className='inline-flex bg-red-200 w-[600px]'>test! 2</Text>
          </View>
        </ScrollView>
        <View className='inline-flex flex-row bg-yellow-200 flex-nowrap box-border p-1'>
          <Text className='inline-flex bg-red-200'>test! 31</Text>
        </View>
      </View>
    </>
  );
}