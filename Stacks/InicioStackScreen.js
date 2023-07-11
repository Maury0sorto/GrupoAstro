import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarraSuperior from '../Screens/BarraSuperior';
import SettingsScreen from '../Screens/SettingsScreen';
import HomeScreen from '../Screens/HomeScreen';
import BarraSuperiorVolver from '../Screens/BarraSuperiorVolver';
import RadioDanli from '../Screens/Empresas/RadioDanli';
import TeleDanli from '../Screens/Empresas/TeleDanli';

const Stack = createNativeStackNavigator();

const InicioStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={BarraSuperior}
        options={{ headerShown: false }} // Oculta la barra superior en la pantalla "Inicio"
      />
      <Stack.Screen name="Ajustes" component={SettingsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tele Danli" component={TeleDanli}  options={{ headerShown: false }}/>
      <Stack.Screen name="Radio Danli" component={RadioDanli}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default InicioStackScreen;
