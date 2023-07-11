import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';

const BarraSuperior = () => {
  const navigation = useNavigation();


  const handleSharePress = async () => {
    try {
      await Share.share({
        message: '¡Descargar Nuestra Aplicacion Totalmente Gratis! https://play.google.com/store/apps/details?id=grupo.astro6',
      });
    } catch (error) {
      console.log('Error al compartir:', error.message);
    }
  };


  const handleSettingsPress = () => {
    navigation.navigate('Ajustes');
  };

  return (
    <SafeAreaView style={styles.containerBarra}>
      <View style={styles.headerBarra}>
        <Image
          source={{ uri: 'https://i.imgur.com/Ntkp4BF.png' }}
          style={[styles.logoBarra, styles.logoMarginBarra]}
          resizeMode="contain"
        />
        
        <Text style={[styles.titleBarra, styles.titleMarginBarra]}>Grupo Astro</Text>
        <TouchableOpacity onPress={handleSharePress} style={styles.iconContainer2}>
          <MaterialCommunityIcons  name="share-variant" size={24} color="black"  style={styles.iconMarginBarra2}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Ionicons name="settings" size={24} color="black" style={styles.iconMarginBarra} />
        </TouchableOpacity>
       
      </View>


      <View style={styles.container}>
        <HomeScreen/>
    
      </View>


    </SafeAreaView>

    
  );
};

export default BarraSuperior;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      container2: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 16,
      },
  containerBarra: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBarra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#18D0F1',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 25,
  },
  logoBarra: {
    width: 85,
    height: 85,
    marginLeft: -28,
  },
  logoMarginBarra: {
    marginBottom: -28,
  },
  titleBarra: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: -30,
  },
  titleMarginBarra: {
    marginTop: 25,
  },
  iconMarginBarra: {
    marginTop: 30,
  },

  iconContainer2: {
    marginLeft: 90,
  },
  iconMarginBarra2: {
    marginTop: 30,
  },
});
