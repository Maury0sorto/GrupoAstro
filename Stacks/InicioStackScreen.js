import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarraSuperior from '../Screens/BarraSuperior';
import SettingsScreen from '../Screens/SettingsScreen';
import HomeScreen from '../Screens/HomeScreen';
import BarraSuperiorVolver from '../Screens/BarraSuperiorVolver';
import RadioDanli from '../Screens/Empresas/RadioDanli';
import TeleDanli from '../Screens/Empresas/TeleDanli';
import EstacionNaranja from '../Screens/Empresas/EstacionNaranja'
import ElAstro from '../Screens/Empresas/ElAstro';
import AstroTv from '../Screens/Empresas/AstroTv';
import CarlosCastillo from '../Screens/Empresas/CarlosCastillo';
import FundacionCastillo from '../Screens/Empresas/FundacionCastillo';
import AstroPlay from '../Screens/Empresas/AstroPlay';
import OldMusicRadio from '../Screens/Empresas/OldMusicRadio';
import AstroProducciones from '../Screens/Empresas/AstroProducciones';

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
      <Stack.Screen name="Estacion Naranja" component={EstacionNaranja}  options={{ headerShown: false }}/>
      <Stack.Screen name="El Astro" component={ElAstro}  options={{ headerShown: false }}/>
      <Stack.Screen name="Astro Tv" component={AstroTv}  options={{ headerShown: false }}/>
      <Stack.Screen name="Carlos" component={CarlosCastillo}  options={{ headerShown: false }}/>
      <Stack.Screen name="Fundacion Castillo" component={FundacionCastillo}  options={{ headerShown: false }}/>
      <Stack.Screen name="Astro Play" component={AstroPlay}  options={{ headerShown: false }}/>
      <Stack.Screen name="Old Music Radio" component={OldMusicRadio}  options={{ headerShown: false }}/>
      <Stack.Screen name="Astro Producciones" component={AstroProducciones}  options={{ headerShown: false }}/>



    </Stack.Navigator>
  );
};

export default InicioStackScreen;
