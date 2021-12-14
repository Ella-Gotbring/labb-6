import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <br />
      <br />
      <Text> Welcome Home </Text>
      <br />
      <Button
        title="Go to About Screen"
        onPress={() =>
          navigation.navigate("About", { id: 82, name: "Benny" })
        }
      />
         <br />
        <Button
        title="Go to Credits Screen"
        onPress={() =>
          navigation.navigate("Credits", { id: 96, name: "Els" })
        }
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  );
}

function AboutScreen({ route, navigation }) {
  const { id, name } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> This is the about screen </Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non odio a dolor imperdiet porttitor. In mattis, eros ac pulvinar fringilla, neque est ultrices dui, finibus tincidunt diam turpis in nibh. Mauris vestibulum, eros eget sollicitudin pretium, ligula ligula rhoncus nisl, sit amet congue libero ligula sed lacus. Phasellus commodo purus id ligula viverra suscipit. Quisque scelerisque purus ut luctus placerat. Fusce et elit ac ex porta fermentum et vel orci. Curabitur porta tincidunt felis quis vestibulum. Nullam vitae sem ipsum. Aliquam aliquam tellus eros, a rutrum nunc lobortis at. Nunc sodales volutpat neque, aliquam varius orci iaculis sit amet. Nam aliquam dapibus velit, ut posuere turpis finibus eget. Nulla sed dui finibus tellus facilisis ultrices in in dolor. Morbi eget tempus diam. Nam egestas metus ut sem accumsan lacinia. Nunc lacinia nunc in mauris porttitor viverra.</Text>
      <Text> {id} </Text>
      <Text> {name} </Text>
      
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}


// function Credits({ route, navigation }) {
//   const { id, name } = route.params;
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text> This is the credits screen </Text>
//       <Text> {id} </Text>
//       <Text> {name} </Text>
//       <Button
//         title="Go to Home Screen"
//         onPress={() => navigation.navigate("Home")}
//       />
//     </View>
//   );
// }


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerStyle: {
              backgroundColor: 'mistyrose',
            },
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('my button is working!')}
                title="klicka här"
                color="blue"
              />
            ),
          }}
        
        />
        <Stack.Screen name="About" component={AboutScreen}
        options={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('my button is working!')}
              title="klicka här"
              color="black"
            />
            ),
          }}
        />
        <Stack.Screen name="Credits" getComponent={() => require("./components/Credits").default} 
         options={{
          headerStyle: {
            backgroundColor: 'lightgreen',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('my button is working!')}
              title="klicka här"
              color="orange"
            />
            ),
          }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});