import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from './TextStyle';

const Header = ({navigation, destination, name}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={styles.leftposition}
        onPress={() => navigation.navigate(destination)}>
        <MaterialCommunityIcons
          name={'chevron-left'}
          color={'black'}
          size={30}
        />
      </TouchableOpacity>
      <Text
        style={[
          TextStyle.content,
          {textAlign: 'center', marginLeft: 10, fontWeight: 500},
        ]}>
        {name}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
  leftposition: {
    position: 'absolute',
    left: '10%',
  },
});
