import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const RootStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const mensCategories = ['mens-shirts', 'mens-shoes', 'mens-watches'];
const womensCategories = ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches'];

function MensProductsScreen({ navigation }) {
  return <HomeScreen navigation={navigation} categories={mensCategories} />;
}

function WomensProductsScreen({ navigation }) {
  return <HomeScreen navigation={navigation} categories={womensCategories} />;
}

function ProductsTopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: '700', textTransform: 'none' },
        tabBarIndicatorStyle: { backgroundColor: '#2f6be6', height: 3 },
        tabBarActiveTintColor: '#111',
        tabBarInactiveTintColor: '#555',
      }}
    >
      <TopTab.Screen name="Produtos Masculinos" component={MensProductsScreen} />
      <TopTab.Screen name="Produtos Femininos" component={WomensProductsScreen} />
    </TopTab.Navigator>
  );
}

function MainTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2f6be6',
        tabBarInactiveTintColor: '#757575',
        tabBarLabelStyle: { fontSize: 13, marginBottom: 4 },
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Início' ? 'home' : 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name="Início" component={ProductsTopTabs} />
      <BottomTab.Screen name="Configurações" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <RootStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
