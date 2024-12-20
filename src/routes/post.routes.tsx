import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@screens/Home';
import { NewPost } from '@screens/NewPost';
import { PostsUser } from '@screens/PostsUser';

const Stack = createStackNavigator()

export function PostRoutes() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Posts" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="NewPost" component={NewPost}
        options={{
          headerStyle: {
            backgroundColor: '#36393f',
          },
          headerTintColor: '#FFF'
        }}
      />
      <Stack.Screen name="PostsUser" component={PostsUser}
        options={{
          headerStyle: {
            backgroundColor: '#36393f',
          },
          headerTintColor: '#FFF'
        }}
      />
    </Stack.Navigator>
  );
}