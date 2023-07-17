import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import BarraSuperiorVideos from '../BarraSuperiorVideos';

const AstroTv = () => {
  const [muted, setMuted] = useState(false);

  const handleMutePress = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    // Iniciar reproducción del video una vez montado el componente
    playVideo();
  }, []);

  const playVideo = async () => {
    try {
      await videoRef?.current?.playAsync();
    } catch (error) {
      console.log('Error al reproducir el video:', error);
    }
  };

  const videoRef = React.useRef(null);

  return (
    <>
    <BarraSuperiorVideos/>
    
    <View style={styles.container}>
        
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://cloud2.streaminglivehd.com:1936/8138/8138/playlist.m3u8' }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isMuted={muted}
        />
      </View>
      <View style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-high'}
          size={32}
          color="white"
          onPress={handleMutePress}
        />
      </View>
    </View>
    </>
  );
};

export default AstroTv;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -340,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  muteButton: {
    position: 'absolute',
    top: -270,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 15,
  },
});
