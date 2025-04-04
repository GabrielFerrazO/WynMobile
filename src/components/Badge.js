import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function Badge({
  text,
  variant = 'default',
  size = 'medium',
  style,
  textStyle,
}) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return styles.success;
      case 'warning':
        return styles.warning;
      case 'error':
        return styles.error;
      case 'info':
        return styles.info;
      default:
        return styles.default;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <View style={[styles.container, getVariantStyle(), getSizeStyle(), style]}>
      <Text style={[styles.text, textStyle]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.borderRadius.round,
    paddingHorizontal: spacing.paddingSmall,
    paddingVertical: spacing.paddingSmall / 2,
    alignSelf: 'flex-start',
  },
  text: {
    ...typography.caption,
    color: colors.text,
  },
  default: {
    backgroundColor: colors.primary,
  },
  success: {
    backgroundColor: colors.success,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  error: {
    backgroundColor: colors.error,
  },
  info: {
    backgroundColor: colors.info,
  },
  small: {
    paddingHorizontal: spacing.paddingSmall / 2,
    paddingVertical: spacing.paddingSmall / 4,
  },
  medium: {
    paddingHorizontal: spacing.paddingSmall,
    paddingVertical: spacing.paddingSmall / 2,
  },
  large: {
    paddingHorizontal: spacing.padding,
    paddingVertical: spacing.paddingSmall,
  },
}); 