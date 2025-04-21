import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function RegisterScreen() {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    const result = await signUp(email, password, () => navigation.navigate('Login'));
    setLoading(false);

    if (!result.success) {
      Alert.alert('Erro', result.error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Preencha os dados abaixo</Text>

      <Input
        label="Nome"
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome completo"
      />

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Input
        label="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirme sua senha"
        secureTextEntry
      />

      <View style={styles.userTypeContainer}>
        <Text style={styles.userTypeLabel}>Tipo de Usuário</Text>
        <View style={styles.userTypeButtons}>
          <TouchableOpacity
            style={[
              styles.userTypeButton,
              userType === 'client' && styles.userTypeButtonActive,
            ]}
            onPress={() => setUserType('client')}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                userType === 'client' && styles.userTypeButtonTextActive,
              ]}
            >
              Cliente
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.userTypeButton,
              userType === 'provider' && styles.userTypeButtonActive,
            ]}
            onPress={() => setUserType('provider')}
          >
            <Text
              style={[
                styles.userTypeButtonText,
                userType === 'provider' && styles.userTypeButtonTextActive,
              ]}
            >
              Prestador
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Cadastrar"
        onPress={handleRegister}
        loading={loading}
        style={styles.button}
      />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>
          Já tem uma conta? <Text style={styles.loginTextBold}>Faça login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.padding,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.paddingSmall,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.paddingLarge,
  },
  userTypeContainer: {
    marginBottom: spacing.padding,
  },
  userTypeLabel: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.paddingSmall,
  },
  userTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userTypeButton: {
    flex: 1,
    padding: spacing.padding,
    borderRadius: spacing.borderRadius,
    backgroundColor: colors.card,
    marginHorizontal: spacing.paddingSmall,
  },
  userTypeButtonActive: {
    backgroundColor: colors.primary,
  },
  userTypeButtonText: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
  },
  userTypeButtonTextActive: {
    color: colors.text,
    ...typography.bodyBold,
  },
  button: {
    marginTop: spacing.padding,
  },
  loginButton: {
    marginTop: spacing.paddingLarge,
    alignItems: 'center',
  },
  loginText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  loginTextBold: {
    ...typography.bodyBold,
    color: colors.primary,
  },
}); 