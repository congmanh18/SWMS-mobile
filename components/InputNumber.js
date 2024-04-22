import React, {useState, forwardRef, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import TextStyle from './TextStyle.js';

const InputNumber = forwardRef((props, ref) => {
  const [number, setNumber] = useState('');
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleNumberChange = text => {
    if (/^\d*$/.test(text)) {
      setNumber(text);
    }
  };
  useEffect(() => {
    if (props.autoFocus && ref.current) {
      const focusTextInput = () => {
        ref.current.focus();
      };
      setTimeout(focusTextInput, 100);
    }
  }, [props.autoFocus, ref]);

  return (
    <View style={[styles.square, focused && styles.focused]}>
      <TextInput
        ref={ref}
        value={number}
        style={[
          TextStyle.heading1,
          {color: '#00CC33', width: 30, textAlign: 'center'},
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleNumberChange}
        maxLength={1}
        keyboardType="numeric"
        autoFocus={props.autoFocus}
      />
    </View>
  );
});

export default InputNumber;

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
  focused: {
    borderColor: 'black',
  },
});
