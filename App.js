import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/images/download.png')}
        style={styles.image}
      />
      <Text style={styles.title}>LaundryKu</Text>
      <Text style={styles.subtitle}>
        Solusi Cepat dan Efisien untuk Laundry
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigasi ke layar selanjutnya (misalnya, layar pilihan jasa laundry)
        }}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
