import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function Avatar({
  source,
  size = 'medium',
  name,
  online,
  style,
}) {
  const getSize = () => {
    switch (size) {
      case 'small':
        return spacing.avatarSize * 0.8;
      case 'large':
        return spacing.avatarSize * 1.5;
      default:
        return spacing.avatarSize;
    }
  };

  const getInitials = () => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarSize = getSize();

  return (
    <View style={[styles.container, { width: avatarSize, height: avatarSize }, style]}>
      {source ? (
        <Image
          source={{ uri: source }}
          style={[styles.image, { width: avatarSize, height: avatarSize }]}
        />
      ) : (
        <View style={[styles.initialsContainer, { width: avatarSize, height: avatarSize }]}>
          <Text style={[styles.initials, { fontSize: avatarSize * 0.4 }]}>
            {getInitials()}
          </Text>
        </View>
      )}
      {online !== undefined && (
        <View style={[styles.status, { backgroundColor: online ? colors.statusOnline : colors.statusOffline }]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: spacing.borderRadius.round,
    overflow: 'hidden',
    backgroundColor: colors.card,
  },
  image: {
    borderRadius: spacing.borderRadius.round,
  },
  initialsContainer: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    ...typography.h3,
    color: colors.text,
  },
  status: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.background,
  },
}); 