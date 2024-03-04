import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const BetButtonGroup = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        gap: 10,
        marginLeft: 20,
        marginBottom: 20,
      }}>
      <Button amount="100" />
      <Button amount="200" />
      <Button amount="300" />
    </View>
  );
};

export default BetButtonGroup;

const Button = ({amount}: {amount: string}) => {
  return (
    <TouchableOpacity
      style={{padding: 10, backgroundColor: 'purple', borderRadius: 5}}>
      <Text style={{color: 'white'}}>{amount}</Text>
    </TouchableOpacity>
  );
};
