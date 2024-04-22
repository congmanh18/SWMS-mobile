import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  ScrollView,
  ImageBackground, // Thêm import
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Thumpnail from '../components/Thumpnail.js';
import Header from '../components/Header.js';
import TrashBin from '../components/TrashBin.js';
import Dialog from '../components/Dialog.js';
import faketrash from '../faketrash.json';

const Area = ({navigation, route}) => {
  const {locaName} = route.params;
  const [selectedTrashBin, setSelectedTrashBin] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [trashbin, setTrashBin] = useState(faketrash);

  const openDialog = id => {
    setSelectedTrashBin(id);
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setSelectedTrashBin(null);
  };

  return (
    <ImageBackground
      source={require('../assets/png/Google.png')}
      style={styles.container}>
      <View style={styles.overlay}></View>
      <Header name={locaName} navigation={navigation} destination={'MyTabs'} />
      <Thumpnail
        source={require('../assets/png/Google.png')}
        navigation={navigation}
        destination="Login"
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.content}>
          {trashbin?.map(item => {
            return (
              <TrashBin
                key={item.id}
                id={item.id}
                distance={item.distance}
                time={item.time}
                locaName={locaName}
                percent={item.percent}
                address={item.address}
                source={require('../assets/png/Google.png')}
                onPress={() => openDialog(item)}
              />
            );
          })}
          {selectedTrashBin && (
            <Dialog
              id={selectedTrashBin.id}
              percent={'90%'}
              distance={selectedTrashBin.distance}
              time={selectedTrashBin.time}
              address={selectedTrashBin.address}
              navigation={navigation}
              destination={'Transaction'}
              visible={dialogVisible}
              onClose={closeDialog}
              title="Dialog Title"
              message="This is a simple dialog message."
            />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Area;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
