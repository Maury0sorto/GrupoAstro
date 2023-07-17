import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Cargando = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" style={styles.indicator} />
        <Text style={styles.text}>Cargando...</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Cargando;
