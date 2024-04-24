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

const Location = ({locaName, destination, address, source, navigation}) => {
  const [state, setState] = useState('');

  return (
    <Pressable
      style={styles.frame}
      onPress={() => {
        navigation.navigate(destination, {locaName: locaName});
      }}>
      <Image
        source={source}
        style={{width: '100%', height: '100%', borderRadius: 5}}
      />
      <LinearGradient
        colors={[
          'rgba(93, 166, 70, 1)',
          'rgba(93, 166, 70, 0.9)',
          'rgba(255, 255, 255, 0)',
        ]}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[
          styles.bottomposition,
          {
            width: '100%',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            paddingBottom: 7,
            paddingTop: 7,
          },
        ]}>
        <Text style={{color: 'black', fontWeight: '900', fontSize: 25}}>
          {locaName}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name={'map-marker'}
            color={'white'}
            size={15}
          />
          <Text style={[TextStyle.note, {color: 'white'}]}>{address}</Text>
        </View>
        {/* longitude */}
        <Text style={[TextStyle.note, {color: 'white'}]}>10°55'06.5"N </Text>
        <Text style={[TextStyle.note, {color: 'white'}]}>106°43'38.5"E </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Location;

const styles = StyleSheet.create({
  frame: {
    margin: 5,
    height: 214,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#55EE25',
    borderColor: '#EEF2FE',
    borderRadius: 5,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {
    height: '40%',
    position: 'absolute',
    bottom: '0%',
    paddingLeft: 10,
  },
});
