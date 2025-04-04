import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

// Dados mockados por enquanto - depois virão do Firestore
const initialMessages = [
  {
    id: '1',
    text: 'Olá, gostaria de agendar para segunda-feira',
    timestamp: '10:30',
    sender: 'user',
    status: 'read',
  },
  {
    id: '2',
    text: 'Oi! Claro, tenho disponibilidade. Qual horário prefere?',
    timestamp: '10:31',
    sender: 'provider',
    status: 'read',
  },
  {
    id: '3',
    text: 'Pode ser pela manhã? Por volta das 9h?',
    timestamp: '10:32',
    sender: 'user',
    status: 'read',
  },
  {
    id: '4',
    text: 'Sim, 9h está perfeito! Confirmo o agendamento.',
    timestamp: '10:33',
    sender: 'provider',
    status: 'sent',
  },
];

export function ChatRoomScreen({ route }) {
  const { provider, serviceName } = route.params;
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        text: newMessage,
        timestamp: new Date().toLocaleTimeString().slice(0, 5),
        sender: 'user',
        status: 'sent',
      };
      setMessages([message, ...messages]);
      setNewMessage('');
      
      // Simular resposta do prestador
      setTimeout(() => {
        const response = {
          id: (Date.now() + 1).toString(),
          text: 'Mensagem recebida! Responderei em breve.',
          timestamp: new Date().toLocaleTimeString().slice(0, 5),
          sender: 'provider',
          status: 'sent',
        };
        setMessages(prev => [response, ...prev]);
      }, 1000);
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessage : styles.providerMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.messageFooter}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        {item.sender === 'user' && (
          <Text style={styles.status}>
            {item.status === 'sent' ? '✓' : '✓✓'}
          </Text>
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <View style={styles.providerInfo}>
          <Text style={styles.providerName}>{provider}</Text>
          <Text style={styles.serviceName}>{serviceName}</Text>
        </View>
        {isTyping && (
          <Text style={styles.typingIndicator}>digitando...</Text>
        )}
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        inverted
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Digite sua mensagem..."
          multiline
        />
        <TouchableOpacity 
          style={[
            styles.sendButton,
            !newMessage.trim() && styles.sendButtonDisabled
          ]}
          onPress={handleSend}
          disabled={!newMessage.trim()}
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  providerInfo: {
    marginBottom: 4,
  },
  providerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  serviceName: {
    fontSize: 14,
    color: '#666',
  },
  typingIndicator: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  messagesList: {
    padding: 15,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFD700',
  },
  providerMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginRight: 4,
  },
  status: {
    fontSize: 12,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  sendButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
}); 