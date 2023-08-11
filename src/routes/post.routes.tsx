import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@screens/Home';
import { NewPost } from '@screens/NewPost';

const Stack = createStackNavigator()

export function PostRoutes() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Posts" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
}