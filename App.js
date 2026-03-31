import 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PlanetsScreen from './screens/PlanetsScreen';
import FilmsScreen from './screens/FilmsScreen';
import SpaceshipsScreen from './screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' ? <Tabs /> : <DrawerNav />}
    </NavigationContainer>
  );
}
