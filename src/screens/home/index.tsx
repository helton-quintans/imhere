import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Helton', 'Juliana', 'Diego'];

  function handleAddParticipant() {
    console.log('AddParticipant');
  }

  function handleRemoveParticipant(name: string) {
    console.log('RemoveParticipant');
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant 
              key={index} name={participant}
              onRemove={() => 
              handleRemoveParticipant("Helton")} />
          )) 
        }
      </ScrollView> 
    </View>
  );
}