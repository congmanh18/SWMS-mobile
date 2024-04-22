/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import Verification from './screens/Verification';
import Home from './screens/Home';
import Area from './screens/Area';
import Transaction from './screens/Transaction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './screens/Profile';
import Setting from './screens/Settings';
import Map from './screens/Map';
import Graph from './screens/Graph';
import QRCode from './screens/QRCode';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      // inactiveColor="#E8EBB5"
      activeColor="#005249"
      // screenOptions={
      //   {
      //    }
      // }
      barStyle={{
        height: '9%',
      }}
      backBehavior={'initialRoute'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'map-marker' : 'map-marker-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={QRCode}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'qrcode-scan' : 'qrcode'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Graph"
        component={Graph}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'chart-box' : 'chart-box-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.content}>
          <Stack.Navigator>
            <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Transaction"
              component={Transaction}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Area"
              component={Area}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
