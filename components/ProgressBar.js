import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Weight from '../assets/svg/Weight.svg';
import Level from '../assets/svg/Level.svg';

const ProgressBar = ({numerator, denominator, iconName}) => {
  const [state, setState] = useState('');
  const percent = (numerator / denominator) * 100;

  let iconComponent;
  if (iconName === 'Weight') {
    iconComponent = <Weight width={25} height={25} />;
  } else if (iconName === 'Level') {
    iconComponent = <Level width={25} height={25} />;
  }

  return (
    <View style={styles.container}>
      {iconComponent}
      <View style={[styles.frame, {width: '70%'}]}>
        <View
          style={{
            backgroundColor: 'red',
            height: '100%',
            width: `${percent}%`,
            borderRadius: 5,
          }}></View>
      </View>
      <View
        style={{
          width: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> {numerator}</Text>
        <Text> {denominator}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    margin: 3,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#DDEACE',
    borderRadius: 5,
  },
  rightposition: {
    position: 'absolute',
    right: '10%',
  },
});
