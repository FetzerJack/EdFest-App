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
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Presenters
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Jane Armellino
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Jane Armellino
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Jane Armellino
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Jane Armellino
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
        </Text>
      </View>
      <View style={styles.presenterContainer}>
        <Text style={styles.nameText}>
          Jane Armellino
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
        </Text>
      </View>
      <View style={styles.presenterContainer, {marginBottom: 5}}>
        <Text style={styles.nameText}>
          Jane Armellino (KEEP AS BOTTOM)
        </Text>
        <Text style={styles.descriptionText}>
          Not only is she a world class programmer, a leader of worst, janky, back alley programmers who are better at not putting in comments than actually writing code, but she also is considered a "Big Cheese" now at her job.
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
    backgroundColor: Colors.background,
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
});
