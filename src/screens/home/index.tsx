import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';
import { getCurrentDate } from '../../utils';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
    if(participants.includes(participantName)) {
      return Alert.alert(
        'Participante já cadastrado',
        'Já existe um participante com esse nome'
      )
    }
     
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
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
      <Text style={styles.eventDate}>{getCurrentDate()}</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'    
          placeholderTextColor="#6B6B6B"  
          onChangeText={e => setParticipantName(e)}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleAddParticipant}>
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