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

const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleNumberChange = text => {
    // Xác thực xem text có phải là một ký tự số không
    if (/^\d*$/.test(text)) {
      // Nếu là số, cập nhật giá trị state
      setNumber(text);
    }
  };

  return (
    <View style={styles.square}>
      <TextInput
        value={number}
        style={[
          TextStyle.heading1,
          {color: '#00CC33', width: 30, textAlign: 'center'},
        ]}
        onChangeText={handleNumberChange}
        maxLength={1} // Giới hạn chỉ nhập 1 ký tự
        keyboardType="numeric" // Bàn phím chỉ hiển thị số
      />
    </View>
  );
};

export default Input;
export {InputNumber};

const styles = StyleSheet.create({
  square: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 15,
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
});
