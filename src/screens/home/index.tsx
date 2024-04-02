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
        'Participant already registered',
        'There is already a participant with this name'
      )
    }
     
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }
    
  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remove',
      `Remove participant ${name}?`, [
        {
          text: 'Yes',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
        },
        {
          text: 'No',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>{getCurrentDate()}</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Participant name'    
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
            Nobody has arrived at the event yet? Add participants to your attendance list.
          </Text>
        )}
      />
        
      
    </View>
  );
}