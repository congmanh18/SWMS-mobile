import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from '../components/TextStyle.js';
import Button from '../components/Button.js';

const Verification = ({navigation}) => {
  const [number, setNumber] = useState(Array(6).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [_, setFocused] = useState(false);
  const inputRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => React.createRef()),
  );
  const handleFocus = index => {
    setFocusedIndex(index);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  const handleNumberChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      const newNumber = [...number];
      newNumber[index] = text;
      setNumber(newNumber);
      if (text !== '' && index < 5) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleNext = () => {
    // Navigate to the next screen or perform any action when the "Next" button is pressed
    // For demonstration purpose, let's just log the OTP code
    console.log('OTP code:', number.join(''));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{position: 'absolute', left: 25, top: '7%'}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <MaterialCommunityIcons name="chevron-left" color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={[TextStyle.title, {left: 30, marginTop: '30%'}]}>
        OTP Verification
      </Text>
      <Text
        style={[
          TextStyle.description,
          {width: '90%', alignSelf: 'center', marginTop: '10%'},
        ]}>
        A OTP code message has been sent to your registered phone number with
        instructions to reset your password. You may click the link in the
        message or enter the verification code provided below.
      </Text>
      <Text
        style={[
          TextStyle.description,
          {
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 5,
          },
        ]}>
        Enter verification code
      </Text>
      <View
        style={{
          alignSelf: 'center',
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {number.map((digit, index) => (
          <View
            key={index}
            style={[styles.square, focusedIndex === index && styles.focused]}>
            <TextInput
              style={[
                TextStyle.heading1,
                {color: '#00CC33', width: 30, textAlign: 'center'},
              ]}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onChangeText={text => handleNumberChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              returnKeyType={index === 5 ? 'done' : 'next'}
              onSubmitEditing={() => {
                if (index < 5) {
                  inputRefs.current[index + 1].current.focus();
                } else {
                  handleNext();
                }
              }}
              value={digit}
              ref={inputRefs.current[index]}
              autoFocus={index === 0}
            />
          </View>
        ))}
      </View>
      <Text
        style={[
          TextStyle.note,
          {
            textAlign: 'center',
            width: '80%',
            alignSelf: 'center',
            marginTop: 10,
          },
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
        <Button navigation={navigation} destination="MyTabs" name={'next'} />
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
  square: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#EEF2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focused: {
    borderColor: 'black',
  },
});
