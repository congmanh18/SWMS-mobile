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
import TextStyle from '../components/TextStyle.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
const Login = ({navigation}) => {
  const {height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={[TextStyle.title, {left: 30, top: '10%'}]}>Sign in</Text>
      <View
        style={{
          height: height * 0.5,
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          top: '15%',
        }}>
        <Image
          source={require('../assets/png/Logo.png')}
          style={{width: 135, height: 120}}
        />
        <Input nameframe={'cellphone'} text={'Enter your phone number'} />
        <Input
          nameframe={'lock-outline'}
          iconName={'eye-off-outline'}
          text={'Your password'}
        />
        <Button navigation={navigation} destination="Verification" />
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={TextStyle.heading2}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[TextStyle.heading1, {marginTop: '30%', alignSelf: 'center'}]}>
        or
      </Text>
      <Text style={[TextStyle.heading3, {alignSelf: 'center'}]}>
        Use Social Login
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text
          style={[TextStyle.heading2, {alignSelf: 'center', marginBottom: 10}]}>
          Already haven't an account? Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
