import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function Error({
  message,
  onRetry,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.message, textStyle]}>
        {message}
      </Text>
      {onRetry && (
        <TouchableOpacity
          style={styles.button}
          onPress={onRetry}
        >
          <Text style={styles.buttonText}>
            Tentar Novamente
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.padding,
  },
  message: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.padding,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.padding,
    paddingVertical: spacing.paddingSmall,
    borderRadius: spacing.borderRadius,
  },
  buttonText: {
    ...typography.button,
    color: colors.text,
  },
}); 