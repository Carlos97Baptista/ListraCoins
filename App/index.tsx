import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes';
import AuthProvider from './Contexts/auth';

export default function App() {
  return (
    <AuthProvider><Routes /></AuthProvider>

  );
}
