import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const ProgressBar = ({iconName, text, width}) => {
  const [state, setState] = useState('');

  return <View style={[styles.frame, {width: width}]}></View>;
};

export default ProgressBar;

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    height: 10,
    backgroundColor: '#DDEACE',
    borderRadius: 15,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});
