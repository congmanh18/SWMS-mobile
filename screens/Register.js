import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from '../components/TextStyle.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
const Register = () => {
  const {height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{position: 'absolute', left: 25, top: '7%'}}>
        <MaterialCommunityIcons name="chevron-left" color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={[TextStyle.title, {left: 30, top: '15%'}]}>Sign up</Text>
      <View
        style={{
          height: height * 0.5,
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '20%',
        }}>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Button />
      </View>
      <Text
        style={[TextStyle.heading1, {marginTop: '50%', alignSelf: 'center'}]}>
        or
      </Text>
      <Text style={[TextStyle.heading3, {alignSelf: 'center'}]}>
        Use Social Register
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'center',
          width: 150,
          margin: 30,
        }}>
        <Pressable>
          <Image
            source={require('../assets/png/Google.png')}
            style={{width: 50, height: 50}}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require('../assets/png/Apple.png')}
            style={{width: 50, height: 50}}
          />
        </Pressable>
      </View>
      <TouchableOpacity>
        <Text
          style={[TextStyle.heading2, {alignSelf: 'center', marginBottom: 10}]}>
          Already have an account? Signin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
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