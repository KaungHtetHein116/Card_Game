import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

const PlayerNameCard = ({style}: {style: StyleProp<ViewStyle>}) => {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: 10,
          textAlign: 'center',
          color: 'white',
          marginBottom: 2,
        }}
        numberOfLines={2}>
        {'Maung Maung'}
      </Text>
      <Text
        style={{fontSize: 12, textAlign: 'center', color: 'orange'}}
        numberOfLines={2}>
        {'10K'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 10,
  },
});

export default PlayerNameCard;
