// This page contains all necessary external links
import React from 'react';
import { 
  ScrollView, 
  StyleSheet,
  View, 
  Text,
  Image,
  Line,
  TouchableOpacity
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';  // Imports the web browser so that the links can open in a web browser
import Colors from '../constants/Colors'

// Renders the screen on the device
export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Fun with Google Scripts
        </Text>
        <View style={styles.hairLine} />
        <Text style={styles.presenterText}>
          Presenter: Jane Armellino
        </Text>
        <View style={styles.hairLine} />
        <Text style={styles.descriptionText}>
          Learn about using Google Scripts to forward your ability to make good use of the Google products provided at your educational instution.
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Building Apps for the Community
        </Text>
        <View style={styles.hairLine} />
        <Text style={styles.presenterText}>
          Presenter: Jack Fetzer, Ryan Saperstein, Tyler Bartholomew
        </Text>
        <View style={styles.hairLine} />
        <Text style={styles.descriptionText}>
          The Hunterdon Central Code Club leadership presents how they built and deployed several apps for local services while starting with almost no knowledge on app development. 
        </Text>
      </View>
    </ScrollView>
  );
}

// Sets the title of the page
EventsScreen.navigationOptions = {
  title: 'Events',
};

// Create cascading style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Colors.background,  // White
  },
  // Lines separating each 
  hairLine: {
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: '#fff',
    height: 2,
  },
  // Container of the title (Purple box)
  presenterContainer: {
    padding: 15,
    margin: 15,
    fontSize: 20,
    backgroundColor: Colors.bubbleBackground,
    lineHeight: 24,
    borderRadius: 6,
  },
  // Text of the title
  nameText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginBottom: 10,
  },
  // Text of the title
  descriptionText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  presenterText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
});
