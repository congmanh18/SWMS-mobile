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

const Transaction = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} destination={'Home'} />
      <Thumpnail
        locaName={'Chung cu WestView'}
        address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
        source={require('../assets/png/Google.png')}
        navigation={navigation}
        destination="Login"
      />
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TrashBin
            locaName={'Chung cu WestView'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/Google.png')}
            navigation={navigation}
            destination="Dialog"
          />
        </View>
      </ScrollView>
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
