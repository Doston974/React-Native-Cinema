import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import Person from "../screens/Person";
import Serach from "../screens/Serach";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Person"
          component={Person}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Serach}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
