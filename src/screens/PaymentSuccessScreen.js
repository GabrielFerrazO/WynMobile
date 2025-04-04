import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export function PaymentSuccessScreen({ navigation, route }) {
  const { service, total, method } = route.params;

  const getMethodName = (methodId) => {
    const methods = {
      card: 'Cartão de Crédito',
      pix: 'PIX',
      boleto: 'Boleto',
    };
    return methods[methodId] || methodId;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>✅</Text>
        <Text style={styles.title}>Pagamento Realizado!</Text>
        
        <View style={styles.details}>
          <Text style={styles.detailText}>Serviço: {service?.name}</Text>
          <Text style={styles.detailText}>Valor: R$ {total}</Text>
          <Text style={styles.detailText}>Método: {getMethodName(method)}</Text>
          <Text style={styles.detailText}>Data: {new Date().toLocaleDateString()}</Text>
        </View>

        <Text style={styles.message}>
          Seu pagamento foi processado com sucesso. O prestador de serviço será notificado e entrará em contato em breve.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  details: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 30,
  },
  detailText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
}); 