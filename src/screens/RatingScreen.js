import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

export function RatingScreen({ navigation, route }) {
  const { service, provider } = route.params;
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // Por enquanto só simula o envio
    const review = {
      serviceId: service.id,
      serviceName: service.name,
      providerId: provider.id,
      providerName: provider.name,
      rating,
      comment,
      date: new Date().toISOString(),
      userId: 'user123', // Depois virá do contexto de autenticação
      userName: 'João Silva', // Depois virá do contexto de autenticação
    };

    // Simular sucesso
    alert('Avaliação enviada com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Avaliar Serviço</Text>
        <Text style={styles.subtitle}>{service?.name}</Text>
        <Text style={styles.providerName}>Prestador: {provider?.name}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Sua avaliação</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setRating(star)}
            >
              <Text style={styles.star}>
                {star <= rating ? '⭐' : '☆'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>Seu comentário (opcional)</Text>
        <TextInput
          style={styles.commentInput}
          value={comment}
          onChangeText={setComment}
          placeholder="Como foi sua experiência com o serviço?"
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Enviar Avaliação</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  providerName: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star: {
    fontSize: 40,
    marginHorizontal: 5,
  },
  commentContainer: {
    padding: 20,
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    margin: 20,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
}); 