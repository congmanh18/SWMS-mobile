import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import TextStyle from './TextStyle.js';
import Trash from '../assets/svg/TrashBin.svg'; // import SVG
import Distance from '../assets/svg/Distance.svg';
import Time from '../assets/svg/Time.svg';
import DiscountPercent from '../assets/svg/discount-percent-svgrepo-com.svg';

const TrashBin = ({onPress, id, distance, time, percent}) => {
  const [state, setState] = useState('');

  return (
    <TouchableOpacity style={[styles.frame, {opacity: 1}]} onPress={onPress}>
      <View style={{margin: 10}}>
        <Trash width={40} height={40} />
      </View>
      <View style={{width: '85%'}}>
        <Text
          style={{
            fontFamily: 'MontserratAlternates-ExtraBold',
            color: 'black',
          }}>
          ID: {id}
        </Text>
        <View style={styles.rowContainer}>
          <View style={{marginRight: 10}}>
            <Distance width={20} height={20} />
            <Time width={20} height={20} />
          </View>
          <View>
            <View style={styles.rowContainer}>
              <Text style={TextStyle.title3}>Distance: </Text>
              <Text style={TextStyle.message}>{distance}m</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={TextStyle.title3}>Estimated full time: </Text>
              <Text style={TextStyle.message}>{time} minute</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: '5%',
          top: '10%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 33,
            fontFamily: 'Montserrat-Bold',
          }}>
          {percent}
        </Text>
        <DiscountPercent width={15} height={15} />
      </View>
    </TouchableOpacity>
  );
};

export default TrashBin;

const styles = StyleSheet.create({
  frame: {
    margin: 2,
    height: 80,
    width: '95%',
    backgroundColor: '#62FF5B',
    borderColor: '#EEF2FE',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {position: 'absolute', bottom: '0%', paddingLeft: 10},
});
