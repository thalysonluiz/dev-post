import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="light" backgroundColor='#36393F' />
      <Routes />
    </NavigationContainer>
  );
}

