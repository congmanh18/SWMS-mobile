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
import Mapmaker from '../assets/svg/MapMaker.svg';
import TextStyle from './TextStyle.js';

const Thumpnail = ({navigation, destination, source}) => {
  const [state, setState] = useState('');

  return (
    <Pressable
      style={styles.frame}
      onPress={() => {
        navigation.navigate(destination);
      }}>
      <Image
        source={source}
        style={{width: '100%', height: '100%', borderRadius: 5}}
      />
      <View
        style={{
          position: 'absolute',
        }}>
        <Mapmaker />
      </View>
    </Pressable>
  );
};

export default Thumpnail;

const styles = StyleSheet.create({
  frame: {
    margin: 5,
    height: 112,
    width: '95%',
    alignItems: 'center',
    borderColor: '#EEF2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {position: 'absolute', bottom: '0%', paddingLeft: 10},
});
