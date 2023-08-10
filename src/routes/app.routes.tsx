import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { Search } from '@screens/Search';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}