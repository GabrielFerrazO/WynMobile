import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';

const paymentMethods = [
  { id: 'card', name: 'Cartão de Crédito', icon: '💳' },
  { id: 'pix', name: 'PIX', icon: '📱' },
  { id: 'boleto', name: 'Boleto', icon: '📄' },
];

export function PaymentScreen({ navigation, route }) {
  const { service, total } = route.params;
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  // Simular processamento do pagamento
  const handlePayment = () => {
    // Validar dados do cartão se for pagamento com cartão
    if (selectedMethod === 'card') {
      if (!cardData.number || cardData.number.length < 16) {
        Alert.alert('Erro', 'Número do cartão inválido');
        return;
      }
      if (!cardData.name) {
        Alert.alert('Erro', 'Nome no cartão é obrigatório');
        return;
      }
      if (!cardData.expiry || !cardData.expiry.includes('/')) {
        Alert.alert('Erro', 'Data de validade inválida');
        return;
      }
      if (!cardData.cvv || cardData.cvv.length < 3) {
        Alert.alert('Erro', 'CVV inválido');
        return;
      }
    }

    setLoading(true);
    
    // Simular validação e processamento
    setTimeout(() => {
      setLoading(false);
      
      // Simular sucesso (90% de chance) ou erro
      if (Math.random() > 0.1) {
        navigation.replace('PaymentSuccess', {
          service,
          total,
          method: selectedMethod,
        });
      } else {
        navigation.replace('PaymentError', {
          service,
          total,
          method: selectedMethod,
        });
      }
    }, 2000);
  };

  const formatCardNumber = (text) => {
    // Remover tudo que não é número
    const numbers = text.replace(/[^\d]/g, '');
    // Adicionar espaço a cada 4 dígitos
    const formatted = numbers.replace(/(\d{4})/g, '$1 ').trim();
    return formatted;
  };

  const formatExpiry = (text) => {
    // Remover tudo que não é número
    const numbers = text.replace(/[^\d]/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

  const renderCardForm = () => (
    <View style={styles.cardForm}>
      <Text style={styles.formLabel}>Número do Cartão</Text>
      <TextInput
        style={styles.input}
        value={cardData.number}
        onChangeText={(text) => setCardData({ ...cardData, number: formatCardNumber(text) })}
        placeholder="1234 5678 9012 3456"
        keyboardType="numeric"
        maxLength={19}
      />

      <Text style={styles.formLabel}>Nome no Cartão</Text>
      <TextInput
        style={styles.input}
        value={cardData.name}
        onChangeText={(text) => setCardData({ ...cardData, name: text.toUpperCase() })}
        placeholder="NOME COMO ESTÁ NO CARTÃO"
        autoCapitalize="characters"
      />

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Text style={styles.formLabel}>Validade</Text>
          <TextInput
            style={styles.input}
            value={cardData.expiry}
            onChangeText={(text) => setCardData({ ...cardData, expiry: formatExpiry(text) })}
            placeholder="MM/AA"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>

        <View style={styles.halfInput}>
          <Text style={styles.formLabel}>CVV</Text>
          <TextInput
            style={styles.input}
            value={cardData.cvv}
            onChangeText={(text) => setCardData({ ...cardData, cvv: text })}
            placeholder="123"
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );

  const renderPixForm = () => (
    <View style={styles.pixContainer}>
      <Text style={styles.pixCode}>00020126580014BR.GOV.BCB.PIX0136f5f6fcda-dd72-4e8a-8e42-a59bf92f0c79520400005303986540510.005802BR5913Wyn Services6009Sao Paulo62070503***6304E2CA</Text>
      <Text style={styles.pixInstructions}>
        1. Abra seu app de pagamentos{'\n'}
        2. Escaneie o código PIX acima{'\n'}
        3. Confirme o pagamento de R$ {total}
      </Text>
    </View>
  );

  const renderBoletoForm = () => (
    <View style={styles.boletoContainer}>
      <Text style={styles.boletoCode}>34191.79001 01043.510047 91020.150008 9 89110000017832</Text>
      <Text style={styles.boletoInstructions}>
        1. Copie o código do boleto acima{'\n'}
        2. Pague em qualquer banco ou lotérica{'\n'}
        3. O prazo de compensação é de até 3 dias úteis
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pagamento</Text>
        <Text style={styles.subtitle}>{service?.name || 'Serviço'}</Text>
        <Text style={styles.total}>Total: R$ {total}</Text>
      </View>

      <View style={styles.methodsContainer}>
        <Text style={styles.sectionTitle}>Escolha como pagar</Text>
        <View style={styles.methods}>
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodCard,
                selectedMethod === method.id && styles.methodCardSelected
              ]}
              onPress={() => setSelectedMethod(method.id)}
            >
              <Text style={styles.methodIcon}>{method.icon}</Text>
              <Text style={styles.methodName}>{method.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.formContainer}>
        {selectedMethod === 'card' && renderCardForm()}
        {selectedMethod === 'pix' && renderPixForm()}
        {selectedMethod === 'boleto' && renderBoletoForm()}
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.payButtonText}>
            {selectedMethod === 'card' ? 'Pagar' : 'Confirmar Pagamento'}
          </Text>
        )}
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
    marginBottom: 8,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  methodsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  methodCard: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  methodCardSelected: {
    borderColor: '#FFD700',
  },
  methodIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  methodName: {
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    padding: 20,
  },
  cardForm: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  pixContainer: {
    alignItems: 'center',
    padding: 20,
  },
  pixCode: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  pixInstructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  boletoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  boletoCode: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 20,
  },
  boletoInstructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  payButton: {
    margin: 20,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
}); 