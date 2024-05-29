import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Input from './components/input.component';
import ButtonC from './components/button.component';
import User from './components/user.component';
import { getUser } from './services/github.services';

export default function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const handlePress = async () => {
    if (username.trim() === "") {
      setError(true);
      setUserData(null);
    } else {
      setError(false);
      setUserData(null);
      const data = await getUser(username);
      if (data) {
        setUserData(data);
      } else {
        setError(true);
      }
    }
  };

  const handleChange = (text) => {
    setUsername(text);
    // Reset error when input text changes
    if (error && text.trim() !== "") {
      setError(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Procure um Usuário do Github</Text>
      <Input
        onChangeText={handleChange}
        placeholder="Digite o nome de usuário"
      />
      <ButtonC title="Buscar" onPress={handlePress} />
      {!userData && !error && (
        <Text style={styles.message}>
          Digite o nome de um usuário do GitHub para conseguir seus dados.
        </Text>
      )}
      {error && (
        <Text style={styles.errorMessage}>
          Por favor, digite um nome de usuário
        </Text>
      )}
      {!error && userData && (
        <User
          avatarUrl={userData.avatar_url}
          username={userData.login}
          repos={userData.public_repos}
          followers={userData.followers}
          following={userData.following}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorMessage: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});