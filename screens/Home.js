import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';
import SpaceCraftScreen from './screens/SpaceCraft';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
              style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text> Home Screen</Text>
              </View>
        )
    }
}