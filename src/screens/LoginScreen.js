import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HARD_CODED_USER = {
  username: 'admin',
  password: '1234',
};

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    const isValidUser =
      username.trim() === HARD_CODED_USER.username && password.trim() === HARD_CODED_USER.password;

    if (!isValidUser) {
      Alert.alert('Acesso negado', 'Usuário ou senha inválidos.');
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.welcomeTitle}>Bem-vindo de volta!</Text>
        <Text style={styles.welcomeSubtitle}>Insira seus dados para entrar na sua conta.</Text>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.card}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Pressable onPress={() => setSecureTextEntry((prev) => !prev)}>
              <Ionicons name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'} size={20} color="#8b8b8b" />
            </Pressable>
          </View>

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  topSection: {
    flex: 0.42,
    backgroundColor: '#2f6be6',
    justifyContent: 'flex-end',
    paddingHorizontal: 26,
    paddingBottom: 54,
  },
  welcomeTitle: {
    fontSize: 46 / 2,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#e8efff',
  },
  bottomSection: {
    flex: 0.58,
    alignItems: 'center',
    marginTop: -32,
  },
  card: {
    width: '86%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 22,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#dadada',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#222',
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 12,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2f6be6',
    borderRadius: 6,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
