import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const ProgressBar = ({iconName, text}) => {
  const [state, setState] = useState('');

  return <View style={styles.frame}></View>;
};

export default ProgressBar;

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    height: 10,
    width: '80%',
    backgroundColor: '#DDEACE',
    borderRadius: 15,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});
