import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Thumpnail from '../components/Thumpnail.js';
import Header from '../components/Header.js';
import TrashBin from '../components/TrashBin.js';
import Dialog from '../components/Dialog.js';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header name={'Profile'} navigation={navigation} destination={'Home'} />
      <View style={styles.frame}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  frame: {
    margin: '2%',
    height: '92%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
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
