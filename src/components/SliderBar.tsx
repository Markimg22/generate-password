import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderBarProps {
  amountCaracteres: number;
  setAmountCaracteres: Dispatch<SetStateAction<number>>;
}

export function SliderBar({
  amountCaracteres,
  setAmountCaracteres,
}: SliderBarProps) {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={5}
        maximumValue={15}
        minimumTrackTintColor="#ff0000"
        maximumTrackTintColor="#000"
        value={amountCaracteres}
        onValueChange={(value) => setAmountCaracteres(Math.floor(value))}
      />
    </View>
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
  slider: {
    height: 50,
  },
});
