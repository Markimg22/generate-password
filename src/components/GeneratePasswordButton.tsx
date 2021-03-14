import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface GeneratePasswordButtonProps {
  generatePassword: () => void;
}

export function GeneratePasswordButton({
  generatePassword,
}: GeneratePasswordButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffa200',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
