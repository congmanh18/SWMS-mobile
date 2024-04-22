import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../components/Header.js';
import InProcess from '../assets/svg/Transaction1.svg';
import Done from '../assets/svg/Transaction2.svg';
import Button from '../components/Button.js';
import TextStyle from '../components/TextStyle.js';
import Camplus from '../assets/svg/Camplus.svg';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        name={'Transaction'}
        navigation={navigation}
        destination={'Area'}
      />
      <View style={styles.frame}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            alignSelf: 'center',
          }}>
          <InProcess width={70} height={70} />
        </View>
        {/* <Done width={70} height={70} /> */}
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Name: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Role: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>ID: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Address: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Status: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Weight: </Text>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Text style={[TextStyle.message, {padding: 5}]}>300</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Description: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <TextInput maxLength={50} style={{padding: 5}} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={TextStyle.title3}>Proof: </Text>
          <Text style={TextStyle.message}></Text>
        </View>
        <View
          style={{
            width: 300,
            height: 200,
            backgroundColor: 'black',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Camplus />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
          }}>
          <Button navigation={null} destination={null} name={'save'} />
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  rowContainer: {
    margin: 3,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  frame: {
    margin: '2%',
    height: '92%',
    width: '90%',
    padding: '5%',
    paddingTop: '25%',
    backgroundColor: '#A5D398',
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
