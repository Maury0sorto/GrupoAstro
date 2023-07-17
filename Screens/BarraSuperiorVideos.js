import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



const BarraSuperiorVideos = () => {
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

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogoPress = () => {
    navigation.navigate('Inicio');
  };

  return (
    <SafeAreaView style={styles.containerBarra}>
      <View style={styles.headerBarra}>
        <TouchableOpacity onPress={handleBackPress} style={styles.iconContainer}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.iconMarginBarra} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={{ uri: 'https://i.imgur.com/Ntkp4BF.png' }}
            style={[styles.logoBarra, styles.logoMarginBarra]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.titleBarra, styles.titleMarginBarra]}>Grupo Astro</Text>
        <TouchableOpacity onPress={handleSharePress} style={styles.iconContainer}>
          <MaterialCommunityIcons name="share-variant" size={24} color="black" style={styles.iconMarginBarra} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress} style={styles.iconContainer}>
          <Ionicons name="settings" size={24} color="black" style={styles.iconMarginBarra} />
        </TouchableOpacity>
      </View>

      
     

    </SafeAreaView>
  );
};

export default BarraSuperiorVideos;

const styles = StyleSheet.create({

  containerBarra: {
    flex: 1,
    backgroundColor: 'transparent',
  },
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
    backgroundColor: '#000',
  },
  headerBarra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#18D0F1',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 15,
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
  iconContainer: {
    padding: 5,
  },
});
