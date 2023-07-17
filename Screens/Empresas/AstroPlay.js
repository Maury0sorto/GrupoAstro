import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import BarraSuperiorVolver from '../BarraSuperiorVolver';

const AstroPlay = () => {
  const injectedJavaScript = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=device-width, initial-scale=0.75, maximum-scale=3.0, user-scalable=1');
    meta.setAttribute('name', 'viewport');
    document.getElementsByTagName('head')[0].appendChild(meta);
  `;

  return (
    <SafeAreaView style={styles.container}>
      <BarraSuperiorVolver />
      <WebView
        source={{ uri: 'https://www.youtube.com/@teledanlicanal9807/playlists' }}
        style={styles.webview}
        startInLoadingState={true}
        injectedJavaScript={injectedJavaScript}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  webview: {
    flex: 1,
    marginTop: 0,
  },
});

export default AstroPlay;
