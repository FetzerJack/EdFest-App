import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Icon,
  Platform
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import posed from "react-native-pose";

import TabBarIcon from '../components/TabBarIcon';
import PresentersScreen from '../screens/PresentersScreen';
import EventsScreen from '../screens/EventsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';


const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 3;
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
});
const Scaler = posed.View({
  active: { scale: 1 },
  inactive: { scale: 1 }
}); 
const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center", fontSize: 5 },
  spotLight: {
    width: tabWidth,
    height: "100%",
    backgroundColor: "rgba(128,128,255,0.2)",
    borderRadius: 8
  },
  tabText: {
    fontSize: tabWidth / 8,
  }
});

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={S.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`}>
          <View style={S.spotLightInner} />
        </SpotLight>
      </View>
      
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
          >
            <Scaler
              pose={isRouteActive ? "active" : "inactive"}
              style={S.scaler}
            >
            </Scaler>

          {renderIcon({ route, focused: isRouteActive, tintColor })}
          <Text style={S.tabText}>{getLabelText({ route })}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const tabNavigator = createBottomTabNavigator(
  {
    // Allows the user to navigate to the Home page  
    Presenters: {
      screen: PresentersScreen,
      navigationOptions: {
        tabBarLabel: "Presenters",  // Sets the label on the tab bar to "home"
        tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>),
      },
    },

    // Allows the user to navigate to the Links page
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        tabBarLabel: "Events", // Sets the label on the tab bar to "links"
        tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />),
      }
    },     

    // Allows the user to navigate to the about page
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarLabel: "Schedule",  // Sets the label on the tab bar to "Resources"
        tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'} />),
      },
    },
  },

  {
    tabBarComponent: TabBar,
  },
); 

export default tabNavigator;
