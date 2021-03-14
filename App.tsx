import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Logo } from './src/components/Logo';
import { AmountCaracter } from './src/components/AmountCaractere';
import { SliderBar } from './src/components/SliderBar';
import { GeneratePasswordButton } from './src/components/GeneratePasswordButton';
import { Password } from './src/components/Password';

let charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function App() {
  const [password, setPassword] = useState('');
  const [amountCaracteres, setAmountCaracteres] = useState(5);

  function generatePassword() {
    let pass = '';
    for (let i = 0; i < amountCaracteres; i++) {
      let randoNumber = Math.floor(Math.random() * charset.length);
      pass += charset.substring(randoNumber, randoNumber + 1);
    }

    setPassword(pass);
  }

  return (
    <View style={styles.container}>
      <Logo />
      <AmountCaracter amountCaracteres={amountCaracteres} />
      <SliderBar
        amountCaracteres={amountCaracteres}
        setAmountCaracteres={setAmountCaracteres}
      />
      <GeneratePasswordButton generatePassword={generatePassword} />
      <Password password={password} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3fe',
  },
});
