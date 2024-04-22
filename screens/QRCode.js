import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const QRCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>QRCode</Text>
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  focused: {
    borderColor: 'black',
  },
});
