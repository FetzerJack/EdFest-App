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
        style={{flex: 1, backgroundColor: 'white', marginTop: 100}}
        source={{
          uri: 'https://docs.google.com/spreadsheets/d/10dPE2tAckUT7p2TQFbvC0uTw1hE-WLQ3N6ShHpGRyqo/edit#gid=0   ',
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

// Set up a Cascading Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Text when in development mode
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)', // White, opacity 40%
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    backgroundColor: '#8990cc',
    height: 400,
    padding: 5,
    justifyContent: 'space-between',
  },
  welcomeTitleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 45,
    marginTop: '3%',
    justifyContent: 'flex-start',
    //marginTop: '50%',
    //marginBottom: '50%',
  },
  welcomeSubtitleText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
  },
  welcomeBox: {
    alignItems: 'center',
    height: 165,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  welcomeSubBox: {
    position: 'absolute',
    backgroundColor: '#a1a7d7',
    margin: 7,
    paddingLeft: 35, 
    paddingRight: 35, 
    paddingTop: 15, 
    paddingBottom: 15, 
    borderRadius: 8,
  },
  bannerContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.primary,
  },
  bannerImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginTop: 1,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});
