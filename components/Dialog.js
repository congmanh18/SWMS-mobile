import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './Button';
import ProgressBar from './ProgressBar';

const Dialog = ({
  id,
  percent,
  distance,
  time,
  visible,
  onClose,
  locaName,
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
          <Text style={styles.title}>ID: {id}</Text>
          <ProgressBar />
          <Text style={styles.title}>Status: {percent}</Text>
          <Text style={styles.title}>{percent}</Text>
          <Text style={styles.title}>{distance}</Text>
          <Text style={styles.title}>{time}</Text>
          <Text style={styles.message}>{address}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <Button navigation={navigation} destination={destination} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
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
