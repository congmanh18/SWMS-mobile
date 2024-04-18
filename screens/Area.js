import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Thumpnail from '../components/Thumpnail.js';
import Header from '../components/Header.js';
import TrashBin from '../components/TrashBin.js';
import Dialog from '../components/Dialog.js';

const Area = ({navigation}) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header
        name={'Chung cu WestView'}
        navigation={navigation}
        destination={'Home'}
      />
      <Thumpnail
        locaName={'Chung cu WestView'}
        address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
        source={require('../assets/png/Google.png')}
        navigation={navigation}
        destination="Login"
      />
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TrashBin
            id={'231002'}
            distance={'500'}
            time={'10ph'}
            locaName={'Chung cu WestView'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/Google.png')}
            onPress={openDialog}
          />
          <Dialog
            id={'231002'}
            locaName={'Chung cu WestView'}
            percent={'90%'}
            distance={'100m'}
            time={'10ph'}
            address={'so 1 Nguyen Van Bao, Ho Chi Minh City'}
            visible={dialogVisible}
            onClose={closeDialog}
            title="Dialog Title"
            message="This is a simple dialog message."
            navigation={navigation}
            destination={'Transaction'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Area;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
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
});
