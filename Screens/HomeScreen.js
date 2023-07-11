import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data] = useState([
    { text: 'Tele Danlí', image: 'https://i.imgur.com/uACcx3w.png' },
    { text: 'Radio Danlí', image: 'https://i.imgur.com/kMXURXi.png' },
    { text: 'Estacion Naranja', image: 'https://i.imgur.com/xk9QA4r.png' },
    { text: 'El Astro', image: 'https://i.imgur.com/rGLUqkt.png' },
    { text: 'Old Music Radio', image: 'https://i.imgur.com/BC0eIPC.png' },
    { text: 'Astro TV', image: 'https://i.imgur.com/RBKDht6.png' },
    { text: 'Hot Wings', image: 'https://i.imgur.com/RBKDht6.png' },
    { text: 'Astro Producciones', image: 'https://i.imgur.com/RBKDht6.png' },
    { text: 'Astro Play', image: 'https://i.imgur.com/RBKDht6.png' },
    { text: 'Carlos Castillo Ciggar & Co.', image: 'https://i.imgur.com/RBKDht6.png' },
  ]);


  
  const handleButtonPress = (text) => {
    // Configura la navegación a las pantallas correspondientes según el texto del botón
    if (text === 'Tele Danlí') {
      navigation.navigate('Tele Danli');
    } else if (text === 'Radio Danlí') {
      navigation.navigate('Radio Danli');
    } else if (text === 'Estacion Naranja') {
      navigation.navigate('Ajustes');
    } else if (text === 'El Astro') {
      navigation.navigate('Ajustes');
    } else if (text === 'Old Music Radio') {
      navigation.navigate('Ajustes');
    } else if (text === 'Astro TV') {
      navigation.navigate('Ajustes');
    }
  };


  const renderButtons = () => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
      const button1 = data[i];
      const button2 = data[i + 1];
      rows.push(
        <View style={styles.row} key={i}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(button1.text)}
          >
            <Image source={{ uri: button1.image }} style={styles.buttonImage} />
            <Text style={styles.buttonText}>{button1.text}</Text>
          </TouchableOpacity>
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
        
      <ScrollView>
        <View style={styles.container2}>{renderButtons()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
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
    textAlign: "center",
  },
});

export default HomeScreen;
