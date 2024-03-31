import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {

  function handleAddParticipant() {
    console.log('AddParticipant');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 31 de março de 2024</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'    
          placeholderTextColor="#6B6B6B"  
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}