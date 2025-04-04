import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'Limpeza', icon: '🧹' },
  { id: '2', name: 'Eletricista', icon: '⚡' },
  { id: '3', name: 'Encanador', icon: '🔧' },
  { id: '4', name: 'Pintor', icon: '🎨' },
  { id: '5', name: 'Jardinagem', icon: '🌱' },
  { id: '6', name: 'Mudança', icon: '📦' },
];

export function HomeScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryCard}
      onPress={() => navigation.navigate('ServiceList', { category: item.name })}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você precisa?</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  list: {
    paddingBottom: 20,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
}); 