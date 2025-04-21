import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function LoginScreen() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);

    if (!result.success) {
      Alert.alert('Erro', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao WynMobile</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

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

      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
        style={styles.button}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.registerTextBold}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.padding,
    backgroundColor: colors.background,
    justifyContent: 'center',
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
  button: {
    marginTop: spacing.padding,
  },
  registerButton: {
    marginTop: spacing.paddingLarge,
    alignItems: 'center',
  },
  registerText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  registerTextBold: {
    ...typography.bodyBold,
    color: colors.primary,
  },
}); 