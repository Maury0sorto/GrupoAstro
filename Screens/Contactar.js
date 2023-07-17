import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

const Contactar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = () => {
    // Validar los datos del formulario
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Enviar los datos del formulario (puedes realizar una petición a una API, enviar un correo, etc.)
    // Aquí solo mostramos una alerta con los datos ingresados
    Alert.alert('Mensaje enviado', `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);

    // Reiniciar los campos del formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        value={mensaje}
        onChangeText={setMensaje}
        multiline
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Contactar;
