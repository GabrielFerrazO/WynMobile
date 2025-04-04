import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export function PaymentErrorScreen({ navigation, route }) {
  const { service, method } = route.params;

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
        <Text style={styles.icon}>❌</Text>
        <Text style={styles.title}>Ops! Algo deu errado</Text>
        
        <View style={styles.details}>
          <Text style={styles.detailText}>
            Não foi possível processar seu pagamento usando {getMethodName(method)}.
          </Text>
          <Text style={styles.detailText}>
            Por favor, verifique seus dados e tente novamente.
          </Text>
        </View>

        <View style={styles.helpBox}>
          <Text style={styles.helpTitle}>Possíveis motivos:</Text>
          <Text style={styles.helpText}>• Dados do cartão incorretos</Text>
          <Text style={styles.helpText}>• Saldo insuficiente</Text>
          <Text style={styles.helpText}>• Cartão expirado</Text>
          <Text style={styles.helpText}>• Problemas de conexão</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Tentar Novamente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.retryButton, styles.outlineButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={[styles.buttonText, styles.outlineButtonText]}>
            Voltar para Home
          </Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#fff0f0',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 30,
  },
  detailText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    textAlign: 'center',
  },
  helpBox: {
    width: '100%',
    padding: 20,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  helpText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  buttonContainer: {
    gap: 10,
  },
  retryButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  outlineButtonText: {
    color: '#000',
  },
}); 