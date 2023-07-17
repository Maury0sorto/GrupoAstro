import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data] = useState([
    { text: 'Tele Danlí', image: 'https://i.imgur.com/uACcx3w.png' },
    { text: 'Radio Danlí', image: 'https://i.imgur.com/kMXURXi.png' },
    { text: 'Estacion Naranja', image: 'https://i.imgur.com/xk9QA4r.png' },
     { text: 'Old Music Radio', image: 'https://i.imgur.com/BC0eIPC.png' },
     { text: 'Astro TV', image: 'https://i.imgur.com/MoTOiRf.png' },
     { text: 'Astro Play', image: 'https://i.imgur.com/KiDiz2i.png' },
    { text: 'El Astro', image: 'https://i.imgur.com/rGLUqkt.png' },
    { text: 'Carlos Castillo Ciggar & Co.', image: 'https://i.imgur.com/vxCp1c0.png' },
    { text: 'Fundación Castillo Valle', image: 'https://i.imgur.com/BNfYfNF.png' },
    { text: 'Astro Producciones', image: 'https://i.imgur.com/F7OsJXi.png' },
    { text: 'Digital Solución', image: 'https://i.imgur.com/gAJkXoB.png' },
    { text: 'Inversiones ALCA', image: 'https://i.imgur.com/aD6UYET.png' },
    { text: 'Restaurantes y Hoteles de Oriente', image: 'https://i.imgur.com/Nqk2X6x.png' },
    { text: 'Hacienda el Retiro', image: 'https://i.imgur.com/yKLGQFQ.png' },
    { text: 'Inmobiliaria Apaguiz', image: 'https://i.imgur.com/Df1Bic6.png' },
    { text: 'Publicidad Nacional', image: 'https://i.imgur.com/2QfiABR.png' },
  ]);


  
  const handleButtonPress = (text) => {
    // Configura la navegación a las pantallas correspondientes según el texto del botón
    if (text === 'Tele Danlí') {
      navigation.navigate('Tele Danli');
    }
     else if (text === 'Radio Danlí') {
      navigation.navigate('Radio Danli');
    } 
    else if (text === 'Estacion Naranja') {
      navigation.navigate('Estacion Naranja');
    }
     else if (text === 'El Astro') {
      navigation.navigate('El Astro');
    } 
    else if (text === 'Old Music Radio') {
      navigation.navigate('Old Music Radio');
    }
     else if (text === 'Astro TV') {
      navigation.navigate('Astro Tv');
    }
    else if (text === 'Fundación Castillo Valle') {
      navigation.navigate('Fundacion Castillo');
    }
    else if (text === 'Carlos Castillo Ciggar & Co.') {
      navigation.navigate('Carlos');
    }
    else if (text === 'Astro Play') {
      navigation.navigate('Astro Play');
    }
    else if (text === 'Astro Producciones') {
      navigation.navigate('Astro Producciones');
    }
  };


  const renderButtons = () => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
      const button1 = data[i];
      const button2 = data[i + 1];
      rows.push(
        <View style={styles.row} key={i}>
          {/* Botón 1 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(button1.text)}
          >
            <Image source={{ uri: button1.image }} style={styles.buttonImage} />
            <Text style={styles.buttonText}>{button1.text}</Text>
          </TouchableOpacity>
          {/* Botón 2 (opcional) */}
          {button2 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(button2.text)}
            >
              <Image source={{ uri: button2.image }} style={styles.buttonImage} />
              <Text style={styles.buttonText}>{button2.text}</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container2}>{renderButtons()}</View>
      </ScrollView>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigation.navigate('Contactar'); // Acción al presionar la imagen
        }}
      >
        <Image
          source={{ uri: 'https://i.imgur.com/U6HEeix.gif' }}
          style={styles.footerImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container2: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 6,
  },
  buttonImage: {
    width: '100%',
    height: 160,
    marginBottom: 8,
    borderRadius: 19,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },

  footerImage: {
    width: '100%',
    height: 74,
    resizeMode: 'cover',
    marginTop: -20,
  },
});

export default HomeScreen;