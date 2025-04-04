import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function Loading({
  text,
  size = 'medium',
  style,
  textStyle,
}) {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      default:
        return 'large';
    }
  };

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={getSize()}
        color={colors.primary}
      />
      {text && (
        <Text style={[styles.text, textStyle]}>
          {text}
        </Text>
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
  text: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.paddingSmall,
    textAlign: 'center',
  },
}); 