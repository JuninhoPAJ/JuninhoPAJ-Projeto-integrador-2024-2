import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from "@/app/HomeTabs";
import Login from '@/app/Login/Login';

const Index = () => {
    const Stack = createNativeStackNavigator()
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{headerShown: false}} name="HomeTabs" component={HomeTabs}></Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Index