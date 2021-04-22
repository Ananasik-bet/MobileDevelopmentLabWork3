import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainInfo from "./MainInfo";
import Graphs from "./Graphs";
import Books from "./Books";
import { AppTheme } from "../constants/data";

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={ AppTheme }>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="Creator"
                    component={MainInfo}
                    options={{
                        tabBarLabel: 'Creator',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'angellist'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Graphs"
                    component={Graphs}
                    options={{
                        tabBarLabel: 'Graphs',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'area-chart'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Books"
                    component={Books}
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'book'}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
