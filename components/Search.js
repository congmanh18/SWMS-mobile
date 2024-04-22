import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({iconName, text}) => {
  const [state, setState] = useState('');

  return (
    <View style={styles.frame}>
      <MaterialCommunityIcons name={iconName} color={'#005249'} size={25} />
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
    paddingLeft: 15,
    height: 40,
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
