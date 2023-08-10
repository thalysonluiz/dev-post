import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index';
import { AuthProvider } from '@contexts/auth';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider>

        <StatusBar style="light" backgroundColor='#36393F' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

