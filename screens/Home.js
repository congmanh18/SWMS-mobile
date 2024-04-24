import React, {useState, useEffect} from 'react';
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

import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/Search.js';
import TextStyle from '../components/TextStyle.js';
import Location from '../components/Location.js';
import fakelocation from '../fakelocation.json';
import CardInfo from '../components/CardInfo.js';

const Home = ({navigation}) => {
  const [location, setLocation] = useState(fakelocation);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(93, 166, 70, 1)',
          'rgba(255, 255, 255, 0)',
          'rgba(93, 166, 70, 1)',
        ]}
        start={{x: 0, y: 0}} // Start point of gradient
        end={{x: 0, y: 1}} // End point of gradient
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CardInfo navigation={navigation} destination={'Profile'} />
          <TouchableOpacity style={styles.rightposition}>
            <MaterialCommunityIcons name={'bell'} color={'red'} size={30} />
          </TouchableOpacity>
        </View>

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
              marginBottom: '43%',
            }}>
            {location?.map(item => {
              return (
                <Location
                  key={item.id}
                  locaName={item.locaName}
                  address={item.address}
                  source={require('../assets/png/DHCN.png')}
                  navigation={navigation}
                  destination="Area"
                  id={item.id}
                />
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
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
