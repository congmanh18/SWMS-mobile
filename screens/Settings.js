import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Settings,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Block from '../components/Block';
import TextStyle from '../components/TextStyle';
import CardInfo from '../components/CardInfo';

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(93, 166, 70, 1)',
          'rgba(255, 255, 255, 0)',
          'rgba(93, 166, 70, 1)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{height: '100%', width: '100%', alignItems: 'center'}}>
        <CardInfo navigation={navigation} destination={'Profile'} />
        <View style={styles.setting}>
          <Block
            icon={'account-edit-outline'}
            title={'My Account'}
            content={'Make change to your account'}
          />
          <Block
            icon={'qrcode-scan'}
            title={'My Account'}
            content={'Make change to your account'}
          />
          <Block
            icon={'qrcode-scan'}
            title={'QR Code Scan'}
            content={'Make change to your account'}
          />
          <Block
            icon={'lock-outline'}
            title={'Face ID / Touch ID'}
            content={'Manage your device security'}
          />
          <Block
            icon={'shield-check-outline'}
            title={'Two-Factor Authentication'}
            content={'Further secure your account for safety'}
          />
          <Block
            onPress={() => navigation.navigate('Login')}
            icon={'logout'}
            title={'Log out'}
            content={'Further secure your account for safety'}
          />
          <Text
            style={[TextStyle.title3, {left: '5%', alignSelf: 'flex-start'}]}>
            More
          </Text>
          <Block
            icon={'logout'}
            title={'Help & Support'}
            content={'Further secure your account for safety'}
          />
          <Block
            icon={'shield-check-outline'}
            title={'About App'}
            content={'Further secure your account for safety'}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  frame: {
    margin: '2%',
    height: '15%',
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#A5D398',
    borderRadius: 5,
    flexDirection: 'row',
  },
  setting: {
    height: '100%',
    width: '95%',
    borderRadius: 5,
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
