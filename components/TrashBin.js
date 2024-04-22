import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from './TextStyle.js';
import ProgressBar from './ProgressBar.js';
import Trash from '../assets/svg/TrashBin.svg'; // import SVG

const TrashBin = ({onPress, id, distance, time, percent}) => {
  const [state, setState] = useState('');

  return (
    <Pressable style={[styles.frame, {opacity: 0.8}]} onPress={onPress}>
      <View style={{margin: 10}}>
        <Trash width={50} height={50} />
      </View>
      <View style={{width: '85%'}}>
        <Text style={TextStyle.title3}>ID: {id}</Text>
        <ProgressBar width={'70%'} />
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Distance: </Text>
          <Text style={TextStyle.message}>{distance}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Time: </Text>
          <Text style={TextStyle.message}>{time}</Text>
        </View>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          position: 'absolute',
          fontSize: 27,
          right: '2%',
        }}>
        {percent}%
      </Text>
    </Pressable>
  );
};

export default TrashBin;

const styles = StyleSheet.create({
  frame: {
    margin: 2,
    height: 80,
    width: '95%',
    backgroundColor: '#62FF5B',
    borderColor: '#EEF2FE',
    borderRadius: 15,
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
