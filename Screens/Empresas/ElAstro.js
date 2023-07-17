import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import BarraSuperiorVideos from '../BarraSuperiorVideos';
import BarraSuperiorVolver from '../BarraSuperiorVolver';

const ElAstro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BarraSuperiorVolver />
      <WebView
        source={{ uri: 'https://elastro.net/' }}
        style={styles.webview}
        startInLoadingState={true}
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

export default ElAstro;
