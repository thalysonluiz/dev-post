import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const Stack = createStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignOut" component={SignUp} />
    </Stack.Navigator>
  );
}