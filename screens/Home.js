import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/Search.js';
import TextStyle from '../components/TextStyle.js';
import Location from '../components/Location.js';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <View
          style={{
            height: 70,
            width: 70,
            marginLeft: 10,
            borderRadius: 50,
            backgroundColor: 'red',
            borderWidth: 1,
          }}></View>
        <Text style={[TextStyle.content, {marginLeft: 10, fontWeight: 500}]}>
          Nguyen Cong Manh
        </Text>
        <TouchableOpacity style={styles.rightposition}>
          <MaterialCommunityIcons name={'bell'} color={'red'} size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', left: 25, top: '7%'}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <MaterialCommunityIcons name="chevron-left" color={'black'} size={30} />
      </TouchableOpacity>

      <Search iconName={'map-search'} text={'Enter your work address'} />

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
          <Location
            locaName={'Chung cu WestView'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/Google.png')}
            navigation={navigation}
            destination="Area"
          />

          <Location
            locaName={'Dai hoc cong nghiep'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/Apple.png')}
          />
          <Location
            locaName={'Chung cu WestView'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/a.png')}
          />
          <Location
            locaName={'Dai hoc cong nghiep'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/a.png')}
          />
          <Location
            locaName={'Chung cu WestView'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/a.png')}
          />
          <Location
            locaName={'Dai hoc cong nghiep'}
            address={'TT.Tan Tuc, Binh Chanh, Ho Chi Minh City'}
            source={require('../assets/png/a.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
