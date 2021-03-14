import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface AmountCaractereProps {
  amountCaracteres: number;
}

export function AmountCaracter({ amountCaracteres }: AmountCaractereProps) {
  return <Text style={styles.text}>{amountCaracteres} Caracteres</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
