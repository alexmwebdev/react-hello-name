
import { StyleSheet, Text, View } from 'react-native'; 
import React from 'react'; 
import { useRoute } from '@react-navigation/native'; 
  
const SecondScreen = () => { 
  const route = useRoute(); 
  
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Hello {route.params.message}</Text> 
    </View> 
  ); 
}; 
  
export default SecondScreen; 
  
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  title: { 
    fontSize: 25, 
    fontWeight: 'bold', 
    color: 'black', 
    marginTop: 50, 
  }, 
});