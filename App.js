import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Pedro from './src/components/Pedro/main.js'
import Kauan from './src/components/Kauan/index.js'

export default function App() {
  return (
    <View style={styles.container}>

      <Pedro/>
      <Kauan/>
      
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
  },
});
