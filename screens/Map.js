import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  focused: {
    borderColor: 'black',
  },
});
