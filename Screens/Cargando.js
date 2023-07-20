import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Cargando = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => {
        return prevDots.length >= 3 ? '' : prevDots + '.';
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!showLoading) {
      setDots('');
    }
  }, [showLoading]);

  useEffect(() => {
    if (!showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [dots]);

  if (showLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" style={styles.indicator} />
        <Text style={styles.text}>Cargando{dots}</Text>
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
