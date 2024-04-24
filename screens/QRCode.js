import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const QRCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Montserrat-Black'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-BlackItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-Bold'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-BoldItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-BoldItalic'}}>------------</Text>

      <Text style={{fontFamily: 'Montserrat-ExtraBold'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-ExtraBoldItalic'}}>
        Nguyen Manh
      </Text>
      <Text style={{fontFamily: 'Montserrat-ExtraLight'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-Light'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-LightItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-BoldItalic'}}>------------</Text>

      <Text style={{fontFamily: 'Montserrat-Medium'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-Regular'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-SemiBold'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-SemiBoldItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-Thin'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-ThinItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'MontserratAlternates-Black'}}>
        Qguyen Manh
      </Text>
      <Text style={{fontFamily: 'MontserratAlternates-BlackItalic'}}>
        Nguyen Manh
      </Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
      <Text style={{fontFamily: 'Montserrat-MediumItalic'}}>Nguyen Manh</Text>
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  focused: {
    borderColor: 'black',
  },
});
