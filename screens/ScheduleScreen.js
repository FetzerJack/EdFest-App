// This is the home page of the app
// It appears when the app is opened Contains welcome information
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
import Colors from '../constants/Colors';
class ScheduleScreen extends React.Component {
  render(){
    return (
      <WebView
        style={{flex: 1, backgroundColor: Colors.background, marginTop: 20}}
        source={{
          uri: 'https://docs.google.com/spreadsheets/d/1_By2XNReJYundA779cuWQYPbJDTdCuFn7jBDSgNXwGw/edit?usp=sharing',
        }}
        bounces={true}
        useWebKit={true}
        scrollEnabled={true}
      />
    );
  }
}

ScheduleScreen.navigationOptions = {
  header: null,
};

export default ScheduleScreen;