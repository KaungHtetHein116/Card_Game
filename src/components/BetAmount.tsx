import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BetAmount = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 8}}>{'100K'}</Text>
    </View>
  );
};

export default BetAmount;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
