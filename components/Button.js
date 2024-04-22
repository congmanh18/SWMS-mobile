import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Next from '../assets/svg/Next.svg';
const Button = ({navigation, destination, name}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(destination);
      }}
      style={styles.frame}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.rightposition}>
        <Next width={25} height={25} />
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
    backgroundColor: '#5DA646',
    borderRadius: 15,
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});
