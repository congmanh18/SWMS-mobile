import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from './TextStyle.js';

const Input = ({iconName, nameframe, text}) => {
  const [state, setState] = useState('');

  return (
    <View style={styles.frame}>
      <MaterialCommunityIcons name={nameframe} color={'#747688'} size={30} />
      <TextInput
        value={state}
        style={{marginLeft: 10, color: '#747688', width: 260}}
        placeholder={text}
        onChangeText={text => setState(text)}></TextInput>
      <View style={styles.rightposition}>
        <MaterialCommunityIcons name={iconName} color={'gray'} size={25} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  square: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#EEF2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frame: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    width: 320,
    alignItems: 'center',
    borderColor: '#EEF2FE',
    borderRadius: 15,
    borderWidth: 1,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  focused: {
    borderColor: 'black',
  },
});
