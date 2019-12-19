// This is the about page of the app
// It appears when the user presses the about button

import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Colors from '../constants/Colors';

// Renders the screen on the device
export default function PresentersScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                
            </Text>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
            
            </Text>
        </View>
    </ScrollView>
  );
}

// Picks and displays the title at the top of the screen (Over purple box)
PresentersScreen.navigationOptions = {
  title: 'Presenters',
};
// Create cascading style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
// Container of the title (Purple box)
  titleContainer: {
    padding: 15,
    margin: 15,
    fontSize: 20,
    backgroundColor: Colors.primary,
    lineHeight: 24,
    textAlign: 'center',
    borderRadius: 6,
  },
  // Text of the title
  titleText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
  },
  // Container of the body
  bodyContainer: {
    padding: 15,
    margin: 15,
    fontSize: 15,
    lineHeight: 24,
  },
});
