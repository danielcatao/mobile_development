import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const profileImage =
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80';

const menuItems = [
  { id: 'profile', icon: 'person', label: 'Meus dados' },
  { id: 'notifications', icon: 'notifications', label: 'Notificações' },
  { id: 'terms', icon: 'description', label: 'Termos de uso' },
];

export default function SettingsScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground} />

      <View style={styles.profileCard}>
        <Image source={{ uri: profileImage }} style={styles.avatar} />
        <Text style={styles.name}>João da Silva</Text>
        <Text style={styles.email}>joaodasilva@gmail.com</Text>

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <Pressable key={item.id} style={styles.menuItem}>
              <MaterialIcons name={item.icon} size={22} color="#4d4d4d" />
              <Text style={styles.menuText}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={20} color="#4d4d4d" />
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair da conta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  headerBackground: {
    height: 130,
    backgroundColor: '#2f6be6',
  },
  profileCard: {
    flex: 1,
    marginTop: -56,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginTop: -58,
    marginBottom: 10,
  },
  name: {
    fontSize: 40 / 2,
    fontWeight: '700',
    color: '#111',
  },
  email: {
    fontSize: 34 / 2,
    color: '#666',
    marginBottom: 24,
  },
  menuList: {
    width: '100%',
    gap: 12,
  },
  menuItem: {
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18 / 1.05,
    color: '#333',
  },
  logoutButton: {
    width: '100%',
    marginTop: 26,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#e72f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
