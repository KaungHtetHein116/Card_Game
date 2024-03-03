import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Images} from '../assets/images';

const BetAmount = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.back}
        style={{height: 10, width: 10, borderRadius: 5, marginRight: 2}}
      />
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
    flexDirection: 'row',
  },
});
