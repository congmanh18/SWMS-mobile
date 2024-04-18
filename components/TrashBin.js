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

const TrashBin = ({onPress, id, distance, time, locaName, address, source}) => {
  const [state, setState] = useState('');

  return (
    <Pressable style={styles.frame} onPress={onPress}>
      <View style={{margin: 5}}>
        <MaterialCommunityIcons name="trash-can" color={'white'} size={40} />
      </View>
      <View style={{width: '85%'}}>
        <Text>ID: {id}</Text>
        <ProgressBar />
        <Text>Khoang cach: {distance}</Text>
        <Text>Thoi gian day du kien: {time}</Text>
      </View>
      <Text style={[TextStyle.content, {position: 'absolute', right: '5%'}]}>
        100%
      </Text>
    </Pressable>
  );
};

export default TrashBin;

const styles = StyleSheet.create({
  frame: {
    margin: 5,
    height: 80,
    width: '90%',
    backgroundColor: '#55EE25',
    borderColor: '#EEF2FE',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {position: 'absolute', bottom: '0%', paddingLeft: 10},
});
