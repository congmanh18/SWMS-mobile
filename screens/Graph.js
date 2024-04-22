import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Graph = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  focused: {
    borderColor: 'black',
  },
});
