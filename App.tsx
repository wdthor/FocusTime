import { Colors } from '@/utils/Colors';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Focus App</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.tinBlue
  },
  text: {
    color: Colors.white
  }
});
