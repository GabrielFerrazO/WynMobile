import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Dados mockados por enquanto - depois virão do Firestore
const chats = [
  {
    id: '1',
    provider: 'Maria Silva',
    serviceName: 'Limpeza Residencial',
    lastMessage: 'Olá, gostaria de agendar para segunda-feira',
    timestamp: '10:30',
    unreadCount: 2,
  },
  {
    id: '2',
    provider: 'Carlos Oliveira',
    serviceName: 'Instalação Elétrica',
    lastMessage: 'Combinado! Estarei aí às 14h',
    timestamp: 'Ontem',
    unreadCount: 0,
  },
];

export function ChatListScreen({ navigation }) {
  const renderChatItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatRoom', { 
        provider: item.provider,
        serviceName: item.serviceName,
        chatId: item.id
      })}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>👤</Text>
        {item.unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.headerRow}>
          <Text style={styles.providerName}>{item.provider}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 15,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    fontSize: 40,
  },
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  chatInfo: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  providerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  serviceName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#444',
  },
}); 