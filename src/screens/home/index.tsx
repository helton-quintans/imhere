import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Helton', 'Juliana', 'Diego'];

  function handleAddParticipant() {
    if(participants.includes('Helton'))
      return Alert.alert(
          'Participante já cadastrado',
          'Já existe um participante com esse nome'
        )
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover',
      `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert(`${name} foi removido(a) com sucesso`)
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
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

      <FlatList 
        data={participants} 
        keyExtractor={item => item}
        renderItem={( { item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
        
      
    </View>
  );
}