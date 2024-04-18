import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({iconName, text}) => {
  const [state, setState] = useState('');

  return (
    <View style={styles.frame}>
      <MaterialCommunityIcons name={iconName} color={'black'} size={30} />
      <TextInput
        value={state}
        style={{marginLeft: 10, color: '#747688', width: 260}}
        placeholder={text}
        onChangeText={text => setState(text)}></TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    padding: 10,
    height: 70,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#DDEACE',
    borderRadius: 15,
    marginBottom: 10,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});
