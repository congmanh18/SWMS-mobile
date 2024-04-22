import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './Button';
import ProgressBar from './ProgressBar';
import TrashBin from '../assets/svg/TrashBin.svg'; // import SVG
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Dialog = ({
  id,
  percent,
  distance,
  time,
  visible,
  onClose,
  address,
  navigation,
  destination,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.dialog}>
          <View style={styles.rowContainer}>
            <View style={{marginRight: 10}}>
              <TrashBin width={40} height={40} />
            </View>
            <Text style={styles.title}>ID: {id}</Text>
            <TouchableOpacity
              onPress={onClose}
              style={{position: 'absolute', right: 0}}>
              <MaterialCommunityIcons
                name="location-exit"
                color={'red'}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 5}}>
            <ProgressBar />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Status: </Text>
            <Text style={styles.message}>{percent}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Distance: </Text>
            <Text style={styles.message}>{distance}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Time: </Text>
            <Text style={styles.message}>{time}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Address: </Text>
            <Text style={styles.message}>{address}</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Button
              navigation={navigation}
              destination={destination}
              name={'create transaction'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  rowContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  dialog: {
    position: 'absolute',
    backgroundColor: '#62FF5B',
    borderRadius: 10,
    width: '95%',
    height: '30%',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dialog;
