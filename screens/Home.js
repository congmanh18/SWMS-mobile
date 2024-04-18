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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/Search.js';
import TextStyle from '../components/TextStyle.js';
import Location from '../components/Location.js';

const Home = ({navigation}) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {}, []);

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
        <Pressable
          onPress={() => navigation.navigate('Profile')}
          style={{
            height: 70,
            width: 70,
            marginLeft: 10,
            borderRadius: 50,
            backgroundColor: 'red',
            borderWidth: 1,
          }}></Pressable>
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
          {location?.map(item => {
            return (
              <Location
                key={item.id}
                locaName={item.locaName}
                address={item.address}
                source={require('../assets/png/Google.png')}
                navigation={navigation}
                destination="Area"
                id={item.id}
              />
            );
          })}
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
