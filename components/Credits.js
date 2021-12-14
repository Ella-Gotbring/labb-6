import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default class Credits extends Component {
    render() {
        return (
            <View>
                <Text> This is credits page </Text>
                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non odio a dolor imperdiet porttitor. In mattis, eros ac pulvinar fringilla, neque est ultrices dui, finibus tincidunt diam turpis in nibh. Mauris vestibulum, eros eget sollicitudin pretium, ligula ligula rhoncus nisl, sit amet congue libero ligula sed lacus. Phasellus commodo purus id ligula viverra suscipit. Quisque scelerisque purus ut luctus placerat. Fusce et elit ac ex porta fermentum et vel orci. Curabitur porta tincidunt felis quis vestibulum. Nullam vitae sem ipsum. Aliquam aliquam tellus eros, a rutrum nunc lobortis at. Nunc sodales volutpat neque, aliquam varius orci iaculis sit amet. Nam aliquam dapibus velit, ut posuere turpis finibus eget. Nulla sed dui finibus tellus facilisis ultrices in in dolor. Morbi eget tempus diam. Nam egestas metus ut sem accumsan lacinia. Nunc lacinia nunc in mauris porttitor viverra.</Text>
             
            </View>
        )
    }
}


const styles = StyleSheet.create({

})
