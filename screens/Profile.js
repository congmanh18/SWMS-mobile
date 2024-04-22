import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import RowInfo from '../components/RowInfo';

const Profile = ({navigation}) => {
  const {height} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Header name={'Profile'} navigation={navigation} destination={'MyTabs'} />
      <View style={styles.frame}>
        <View style={styles.avatar}>
          <View
            style={{
              height: (height * 33) / 100,
              width: (height * 20) / 100,
              margin: 10,
              borderRadius: (height * 0.5) / 50,
            }}>
            <Image
              source={require('../assets/png/avt.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: (height * 0.5) / 50,
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#79838B',
            }}>
            Manh
          </Text>
          <RowInfo title={'Role: '} content={'Staff'} />
          <RowInfo title={'Date of Birth: '} content={'18/01/2002'} />
          <RowInfo title={'Gender: '} content={'Male'} />
          <RowInfo title={'Phone number: '} content={'0977683533'} />
        </View>
      </View>
      <Pressable
        style={{
          height: 30,
          width: '20%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
          borderRadius: 10,
        }}>
        <Text>More</Text>
      </Pressable>
      <ScrollView style={styles.more}>
        <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
          <RowInfo title={'Username: '} content={'congmanh18'} />

          <RowInfo title={'Email: '} content={'nguyenmanh180102@gmail.com'} />
          <RowInfo title={'Nationality: '} content={'Viet Nam'} />
          <RowInfo
            title={'Citizen identification number: '}
            content={'541585225664'}
          />
          <RowInfo
            title={'Place of origin:: '}
            content={'920 Nguyen Kiem, Go Vap, tp.HCM'}
          />
          <RowInfo
            title={'Place of residence:: '}
            content={'Phu Nong, Hoai Son, Hoai Nhon, Binh Dinh'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F4FF',
    alignItems: 'center',
  },
  frame: {
    padding: 5,
    height: '40%',
    width: '95%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
  },
  more: {
    paddingTop: 20,
    paddingBottom: 20,
    height: '100%',
    width: '95%',
    backgroundColor: 'white',
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  avatar: {
    height: '100%',
    width: '50%',
    // backgroundColor: '#FDEDEB',
    justifyContent: 'center',
    alignItems: 'center',
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
