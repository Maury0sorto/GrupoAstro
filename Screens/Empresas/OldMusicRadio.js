import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import BarraSuperiorVideos from '../BarraSuperiorVideos';

const OldMusicRadio = () => {
  const audioPlayer = new Audio.Sound();

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioPlayer.loadAsync({ uri: 'http://109.169.76.104:33295/;stream.mp3' });
        await audioPlayer.playAsync();
      } catch (error) {
        console.log('Error al cargar y reproducir el audio:', error);
      }
    };

    playAudio();

    return () => {
      audioPlayer.unloadAsync();
    };
  }, []);

  return (
    <>
      <BarraSuperiorVideos />
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://i.imgur.com/BC0eIPC.png' }} // Reemplaza la URL con la imagen que desees utilizar
          style={styles.imageBackground}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -135, // Ajusta el valor según tus necesidades
    width: '100%', // Ajusta el tamaño de acuerdo a tus necesidades
    height: 300, // Ajusta el tamaño de acuerdo a tus necesidades
  },
});

export default OldMusicRadio;
