import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from './TextStyle.js';

const CardInfo = ({locaName, destination, address, source, navigation}) => {
  const [state, setState] = useState('');

  return (
    <Pressable
      style={styles.frame}
      onPress={() => {
        navigation.navigate(destination, {locaName: locaName});
      }}>
      <View
        style={{
          height: 90,
          width: 90,
          margin: 10,
          borderRadius: 45,
          backgroundColor: 'red',
          borderWidth: 3,
          borderColor: 'white',
        }}>
        <Image
          source={require('../assets/png/avt.png')}
          style={{width: '100%', height: '100%', borderRadius: 45}}
        />
      </View>
      <View>
        <Text style={TextStyle.upperBold}>Nguyen cong manh</Text>
        <Text style={TextStyle.message}>@congmanh18</Text>
      </View>
    </Pressable>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  frame: {
    margin: '2%',
    height: 110,
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#A5D398',
    borderRadius: 5,
    flexDirection: 'row',
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
  bottomposition: {position: 'absolute', bottom: '0%', paddingLeft: 10},
});
