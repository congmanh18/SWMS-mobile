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

const CardInfo = ({locaName, destination, address, source, navigation}) => {
  const [state, setState] = useState('');

  return (
    <Pressable
      style={styles.frame}
      onPress={() => {
        navigation.navigate(destination, {locaName: locaName});
      }}>
      <Image
        source={require('../assets/png/Google.png')}
        style={[styles.frame, {borderRadius: 5, position: 'absolute'}]}
      />
      <LinearGradient
        colors={['rgba(93, 166, 70, 1)', 'rgba(255, 255, 255, 0)']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.frame}>
        <View
          style={{
            height: 90,
            width: 90,
            margin: 10,
            borderRadius: 45,
            borderWidth: 3,
            borderColor: 'white',
            marginRight: 20,
          }}>
          <Image
            source={require('../assets/png/avt.png')}
            style={{width: '100%', height: '100%', borderRadius: 45}}
          />
        </View>
        <View>
          <Text style={TextStyle.upperBold}>cong manh</Text>
          <Text style={TextStyle.message2}>@congmanh18</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[TextStyle.note, {color: 'white'}]}>Role: Staff </Text>
            <Text style={[TextStyle.note, {color: 'white'}]}>
              - Category: Fulltime
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  frame: {
    margin: '2%',
    height: 110,
    width: '95%',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {
    height: '100%',
    position: 'absolute',
    bottom: '0%',
    paddingLeft: 10,
  },
});
