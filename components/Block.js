import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from './TextStyle.js';

const Block = ({icon, onPress, title, content}) => {
  const [state, setState] = useState('');

  return (
    <TouchableOpacity style={[styles.frame, {opacity: 0.8}]} onPress={onPress}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          margin: 10,
          backgroundColor: '#ABABAB',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name={icon} color={'white'} size={20} />
      </View>
      <View style={{width: '85%'}}>
        <Text style={TextStyle.title3}>{title}</Text>
        <Text style={TextStyle.message}>{content}</Text>
      </View>

      <View style={{position: 'absolute', right: '2%'}}>
        <MaterialCommunityIcons
          name={'chevron-right'}
          color={'#ABABAB'}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Block;

const styles = StyleSheet.create({
  frame: {
    margin: 0.5,
    height: 70,
    width: '98%',
    backgroundColor: 'white',
    borderColor: '#EEF2FE',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {position: 'absolute', bottom: '0%', paddingLeft: 10},
});
