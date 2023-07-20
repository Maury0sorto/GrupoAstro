import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, Text } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import BarraSuperiorVolver from './BarraSuperiorVolver';

const Contactar = () => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);

  const handleChangeContacto = (text) => {
    setContacto(text);
    setError(false);
  };

  const enviarCorreo = () => {
    // Validar los datos del formulario
    if (!nombre.trim() || !contacto.trim() || !mensaje.trim()) {
      setError(true);
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Validar el formato del campo de contacto
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$|^[0-9]{10}$/;
    if (!regex.test(contacto)) {
      setError(true);
      Alert.alert('Error', 'El campo de contacto debe ser un email o un número de teléfono válido');
      return;
    }

    // Configurar el correo electrónico
    const correo = {
      recipients: ['tu_correo_electronico@gmail.com'], // Cambia esta dirección de correo por tu dirección de correo electrónico
      subject: 'App Grupo Astro', // Asunto del correo
      body: `Nombre: ${nombre}\nContacto: ${contacto}\nMensaje: ${mensaje}`, // Contenido del correo electrónico
    };

    // Enviar el correo electrónico
    MailComposer.composeAsync(correo)
      .then((result) => {
        if (result.status === 'sent') {
          Alert.alert('Éxito', 'El correo electrónico se envió correctamente');
        } else if (result.status === 'cancelled') {
          Alert.alert('Cancelado', 'Se canceló el envío del correo electrónico');
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Ocurrió un error al enviar el correo electrónico');
        console.log('Error al enviar el correo electrónico:', error);
      });

    // Reiniciar los campos del formulario
    setNombre('');
    setContacto('');
    setMensaje('');
  };

  return (
    <>
      <BarraSuperiorVolver />
      <View style={styles.container}>
        <TextInput
          style={[styles.input, error && styles.inputError]}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={[styles.input, error && styles.inputError]}
          placeholder="Email o número de teléfono"
          value={contacto}
          onChangeText={handleChangeContacto}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.inputMessage, error && styles.inputError]}
          placeholder="Mensaje"
          value={mensaje}
          onChangeText={setMensaje}
          multiline
        />
        {error && (
          <Text style={styles.errorMessage}>El campo de contacto debe ser un email o un número de teléfono válido</Text>
        )}
        <Button title="Enviar" onPress={enviarCorreo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    marginTop: -80,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inputMessage: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingTop: 8,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 12,
  },
});

export default Contactar;
