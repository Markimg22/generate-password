import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PasswordProps {
  password: string;
}

export function Password({ password }: PasswordProps) {
  return (
    <>
      {password !== '' && (
        <View style={styles.container}>
          <Text style={styles.text}>{password}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 7,
  },
  text: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
