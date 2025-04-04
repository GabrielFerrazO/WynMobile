import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// Dados mockados organizados por categoria
const servicesByCategory = {
  'Limpeza': [
    {
      id: '1',
      name: 'Limpeza Residencial',
      provider: 'Maria Silva',
      rating: 4.8,
      reviews: 45,
      price: 'R$ 120,00',
      image: '🏠',
      description: 'Limpeza completa de casas e apartamentos, incluindo todos os cômodos.',
    },
    {
      id: '2',
      name: 'Limpeza Comercial',
      provider: 'João Santos',
      rating: 4.9,
      reviews: 32,
      price: 'R$ 200,00',
      image: '🏢',
      description: 'Serviço especializado para escritórios e estabelecimentos comerciais.',
    },
    {
      id: '3',
      name: 'Limpeza Pós-obra',
      provider: 'Ana Costa',
      rating: 4.7,
      reviews: 28,
      price: 'R$ 250,00',
      image: '🏗️',
      description: 'Limpeza pesada após reformas e construções.',
    },
  ],
  'Eletricista': [
    {
      id: '4',
      name: 'Instalação Elétrica',
      provider: 'Carlos Oliveira',
      rating: 4.9,
      reviews: 56,
      price: 'R$ 150,00',
      image: '⚡',
      description: 'Instalação de tomadas, interruptores e fiação em geral.',
    },
    {
      id: '5',
      name: 'Manutenção Preventiva',
      provider: 'Roberto Souza',
      rating: 4.8,
      reviews: 34,
      price: 'R$ 180,00',
      image: '🔌',
      description: 'Verificação completa da rede elétrica e prevenção de problemas.',
    },
  ],
  'Encanador': [
    {
      id: '6',
      name: 'Reparo de Vazamentos',
      provider: 'José Santos',
      rating: 4.7,
      reviews: 41,
      price: 'R$ 100,00',
      image: '🚰',
      description: 'Identificação e conserto de vazamentos em tubulações.',
    },
    {
      id: '7',
      name: 'Desentupimento',
      provider: 'Paulo Lima',
      rating: 4.8,
      reviews: 38,
      price: 'R$ 120,00',
      image: '🔧',
      description: 'Desentupimento de pias, ralos e tubulações.',
    },
  ],
  'Pintor': [
    {
      id: '8',
      name: 'Pintura Residencial',
      provider: 'Fernando Silva',
      rating: 4.9,
      reviews: 52,
      price: 'R$ 35,00/m²',
      image: '🎨',
      description: 'Pintura de paredes internas e externas com acabamento profissional.',
    },
    {
      id: '9',
      name: 'Texturização',
      provider: 'Ricardo Pereira',
      rating: 4.7,
      reviews: 29,
      price: 'R$ 45,00/m²',
      image: '🖌️',
      description: 'Aplicação de texturas e efeitos especiais em paredes.',
    },
  ],
  'Jardinagem': [
    {
      id: '10',
      name: 'Manutenção de Jardim',
      provider: 'Pedro Costa',
      rating: 4.8,
      reviews: 47,
      price: 'R$ 150,00',
      image: '🌱',
      description: 'Corte de grama, poda de plantas e cuidados gerais com jardim.',
    },
    {
      id: '11',
      name: 'Paisagismo',
      provider: 'Marina Santos',
      rating: 4.9,
      reviews: 36,
      price: 'Sob consulta',
      image: '🌺',
      description: 'Projeto e execução de jardins decorativos.',
    },
  ],
  'Mudança': [
    {
      id: '12',
      name: 'Mudança Residencial',
      provider: 'Transportes Rápidos',
      rating: 4.8,
      reviews: 63,
      price: 'A partir de R$ 300,00',
      image: '📦',
      description: 'Serviço completo de mudança com embalagem e transporte.',
    },
    {
      id: '13',
      name: 'Montagem de Móveis',
      provider: 'Lucas Monteiro',
      rating: 4.9,
      reviews: 42,
      price: 'R$ 150,00',
      image: '🔨',
      description: 'Montagem e desmontagem de móveis em geral.',
    },
  ],
};

export function ServiceListScreen({ navigation, route }) {
  const category = route.params?.category || 'Serviço';
  const services = servicesByCategory[category] || [];

  const renderService = ({ item }) => (
    <TouchableOpacity 
      style={styles.serviceCard}
      onPress={() => navigation.navigate('ServiceDetails', { 
        category: category,
        service: item 
      })}
    >
      <Text style={styles.serviceImage}>{item.image}</Text>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.providerName}>{item.provider}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews} avaliações)</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços de {category}</Text>
      <FlatList
        data={services}
        renderItem={renderService}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: '#000',
  },
  list: {
    padding: 15,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  serviceImage: {
    fontSize: 40,
    marginRight: 15,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  providerName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  reviews: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
}); 