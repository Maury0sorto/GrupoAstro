import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InicioStackScreen from './Stacks/InicioStackScreen';
import Cargando from './Screens/Cargando';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de la aplicación
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Tiempo de carga en milisegundos (5 segundos en este caso)
  }, []);

  const handleAdPress = () => {
    const url = 'https://youtube.com/shorts/YWDltHprssU?feature=share'; // Reemplaza con tu enlace
    Linking.openURL(url);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleAdPress} style={styles.adContainer}>
          <ImageBackground
            source={{ uri: 'https://i.imgur.com/XyzNCXQ.jpg' }}
            style={styles.adImage}
          >

            <View style={styles.loadingContainer}>
              <Cargando />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <InicioStackScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  adContainer: {
    flex: 1,
  },
  adImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
