import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// Dados mockados de avaliações - depois virão do Firestore
const mockReviews = [
  {
    id: '1',
    userName: 'Ana Paula',
    rating: 5,
    comment: 'Excelente serviço! Muito profissional e pontual.',
    date: '2024-03-15',
  },
  {
    id: '2',
    userName: 'Carlos Eduardo',
    rating: 4,
    comment: 'Bom trabalho, recomendo.',
    date: '2024-03-14',
  },
];

export function ServiceDetailsScreen({ navigation, route }) {
  const { service } = route.params;

  const handleRequestService = () => {
    // Simular um preço para o serviço
    const servicePrice = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    
    // Extrair apenas os dados necessários do serviço
    const serviceName = typeof service === 'string' ? service : service?.name || 'Serviço';
    
    navigation.navigate('Payment', {
      service: {
        name: serviceName,
      },
      total: servicePrice,
    });
  };

  const handleRate = () => {
    navigation.navigate('Rating', {
      service: {
        id: service.id,
        name: service.name,
      },
      provider: {
        id: 'provider123', // Depois virá do serviço
        name: service.provider,
      },
    });
  };

  const renderReview = (review) => (
    <View key={review.id} style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View>
          <Text style={styles.reviewerName}>{review.userName}</Text>
          <Text style={styles.reviewDate}>
            {new Date(review.date).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.reviewRating}>
          <Text>{'⭐'.repeat(review.rating)}</Text>
        </View>
      </View>
      <Text style={styles.reviewComment}>{review.comment}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.serviceImage}>{service?.image || '🏠'}</Text>
        <Text style={styles.title}>{service?.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {service?.rating}</Text>
          <Text style={styles.reviews}>({service?.reviews} avaliações)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prestador</Text>
        <View style={styles.providerContainer}>
          <Text style={styles.providerEmoji}>👤</Text>
          <View style={styles.providerInfo}>
            <Text style={styles.providerName}>{service?.provider}</Text>
            <Text style={styles.providerStatus}>Disponível</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>
          {service?.description}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preço</Text>
        <Text style={styles.price}>{service?.price}</Text>
        <Text style={styles.priceNote}>*Valor pode variar de acordo com a complexidade do serviço</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.reviewsHeader}>
          <Text style={styles.sectionTitle}>Avaliações</Text>
          <TouchableOpacity onPress={handleRate}>
            <Text style={styles.rateButton}>Avaliar</Text>
          </TouchableOpacity>
        </View>
        {mockReviews.map(renderReview)}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => navigation.navigate('ChatRoom', { service })}
        >
          <Text style={styles.chatButtonText}>Conversar com Prestador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.requestButton}
          onPress={handleRequestService}
        >
          <Text style={styles.requestButtonText}>Contratar Serviço</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFD700',
    alignItems: 'center',
  },
  serviceImage: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  providerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  providerEmoji: {
    fontSize: 40,
    marginRight: 15,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  providerStatus: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  price: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceNote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  rateButton: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewComment: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  chatButton: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  chatButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  requestButton: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  requestButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
}); 