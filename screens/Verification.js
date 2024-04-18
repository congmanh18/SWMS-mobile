import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from '../components/TextStyle.js';
import {InputNumber} from '../components/Input.js';
import Button from '../components/Button.js';
const Verification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{position: 'absolute', left: 25, top: '7%'}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <MaterialCommunityIcons name="chevron-left" color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={[TextStyle.title, {left: 30, top: '15%'}]}>
        OTP Verification
      </Text>
      <Text
        style={[
          TextStyle.description,
          {width: '90%', alignSelf: 'center', marginTop: '30%'},
        ]}>
        A OTP code message has been sent to your registered phone number with
        instructions to reset your password. You may click the link in the
        message or enter the verification code provided below.
      </Text>
      <Text
        style={[
          TextStyle.description,
          {width: '90%', alignSelf: 'center', marginTop: 10, marginBottom: 5},
        ]}>
        Enter verification code
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <InputNumber />
        <InputNumber />
        <InputNumber />
        <InputNumber />
        <InputNumber />
        <InputNumber />
      </View>
      <Text
        style={[
          TextStyle.note,
          {width: '80%', alignSelf: 'center', marginTop: 10},
        ]}>
        *If you did not initiate this password reset, please disregard this
        message. Ensure the security of your account by not sharing this
        verification code with anyone.
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'center',
        }}>
        <Button navigation={navigation} destination="Home" />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
