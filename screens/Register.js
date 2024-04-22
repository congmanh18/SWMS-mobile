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
import Apple from '../assets/svg/Apple.svg';
import Google from '../assets/svg/Google.svg';
const Register = ({navigation}) => {
  const {height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={[TextStyle.title, {left: 30, top: '10%'}]}>Sign up</Text>
      <View
        style={{
          height: height * 0.5,
          justifyContent: 'space-between',
          alignItems: 'center',
          top: '18%',
        }}>
        <Input nameframe={'account-outline'} text={'Full name'} />
        <Input nameframe={'cellphone'} text={'Enter your phone number'} />
        <Input nameframe={'xml'} text={'Enter your registration code'} />
        <Input
          nameframe={'lock-outline'}
          iconName={'eye-off-outline'}
          text={'Your password'}
        />
        <Input
          nameframe={'lock-outline'}
          iconName={'eye-off-outline'}
          text={'Confirm your password'}
        />
        <Button
          navigation={navigation}
          destination="Verification"
          name={'sign up'}
        />
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
          <Google width={50} height={50} />
        </Pressable>
        <Pressable>
          <Apple width={50} height={50} />
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
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
