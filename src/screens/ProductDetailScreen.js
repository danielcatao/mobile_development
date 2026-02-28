import { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getProductById } from '../services/api';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function getDiscountedPrice(price, discountPercentage) {
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }

  return price * (1 - discountPercentage / 100);
}

export default function ProductDetailScreen({ route, navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProduct = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductById(productId);
      setProduct(data);
    } catch (error) {
      Alert.alert('Erro', error.message || 'Não foi possível carregar o produto.');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useFocusEffect(
    useCallback(() => {
      loadProduct();
    }, [loadProduct])
  );

  if (loading || !product) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#2f6be6" />
      </View>
    );
  }

  const finalPrice = getDiscountedPrice(Number(product.price), Number(product.discountPercentage));
  const hasDiscount = Number(product.discountPercentage) > 0;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#111" />
          </Pressable>
        </View>

        <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.discountedPrice}>{formatCurrency(finalPrice)}</Text>
            {hasDiscount ? <Text style={styles.originalPrice}>{formatCurrency(Number(product.price))}</Text> : null}
          </View>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#ececec',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  title: {
    fontSize: 40 / 2,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  discountedPrice: {
    color: '#d40000',
    fontSize: 18 * 1.1,
    fontWeight: '700',
  },
  originalPrice: {
    fontSize: 30 / 2,
    color: '#666',
    textDecorationLine: 'line-through',
    fontWeight: '600',
  },
  description: {
    fontSize: 32 / 2,
    color: '#666',
    lineHeight: 24,
  },
});
