import React from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base'
import Order from './Screens/Order';
import GoOut from './Screens/GoOut';
import Pro from './Screens/Pro';
import Profile from './Screens/Profile';
const App = () => {
    const Tab = createBottomTabNavigator();
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'grey',
                    labelPosition: "below-icon",
                    labelStyle: {
                        fontSize: 13,
                        fontStyle: 'normal'
                    },
                }}>
                    <Tab.Screen name="Order" component={Order} options={{
                        tabBarLabel: "Order",
                        tabBarIcon: () => (
                            <Icon name="shopping-bag" type="Feather" style={{ fontSize: 22 }} />
                        ),
                    }} />
                    <Tab.Screen name="GoOut" component={GoOut} options={{
                        tabBarLabel: "Go Out",
                        tabBarIcon: () => (
                            <Icon name="shoe-print" type="MaterialCommunityIcons" style={{ fontSize: 25 }} />
                        ),
                    }} />
                    <Tab.Screen name="Pro" component={Pro}
                        options={{
                            tabBarLabel: "Pro",
                            tabBarIcon: () => (
                                <Icon name="crown-outline" type="MaterialCommunityIcons" style={{ fontSize: 22 }} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Profile" component={Profile}
                        options={{
                            tabBarLabel: "Profile",
                            tabBarIcon: () => (
                                <Icon name="cupcake" type="MaterialCommunityIcons" style={{ fontSize: 22 }} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App
