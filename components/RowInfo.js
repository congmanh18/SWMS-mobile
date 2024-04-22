import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RowInfo = ({title, content}) => {
  const [state, setState] = useState('');

  return (
    <View style={styles.frame}>
      <Text style={{fontSize: 13, fontStyle: 'italic', fontWeight: 'bold'}}>
        {title}
      </Text>
      <View
        style={{
          height: 30,
          width: '95%',
          paddingLeft: 10,
          backgroundColor: '#EEF2FE',
          borderRadius: 3,
          justifyContent: 'center',
        }}>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

export default RowInfo;

const styles = StyleSheet.create({
  frame: {
    paddingLeft: 15,
    height: 50,
    width: '95%',
    borderRadius: 5,
    margin: 3,
  },
});
