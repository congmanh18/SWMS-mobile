import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = () => {
  return (
    <TouchableOpacity style={styles.frame}>
      <Text style={styles.text}>SIGN UP</Text>
      <View style={styles.rightposition}>
        <MaterialCommunityIcons name="login" color={'white'} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#79D45C',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});