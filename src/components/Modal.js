import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export function ModalComponent({
  visible,
  onClose,
  title,
  children,
  style,
  contentStyle,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={[styles.content, contentStyle]}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Text style={styles.closeText}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
  },
  content: {
    backgroundColor: colors.background,
    borderRadius: spacing.borderRadius,
    width: '90%',
    maxHeight: '80%',
    padding: spacing.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.padding,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  closeButton: {
    padding: spacing.paddingSmall,
  },
  closeText: {
    ...typography.body,
    color: colors.primary,
  },
}); 