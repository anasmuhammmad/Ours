import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeIndex from './app/(home)';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeIndex />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22, 
    width: '100%',
  },
  
});
