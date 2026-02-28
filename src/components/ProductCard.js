import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

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

export default function ProductCard({ product, onPress }) {
  const hasDiscount = Number(product.discountPercentage) > 0;
  const finalPrice = getDiscountedPrice(Number(product.price), Number(product.discountPercentage));

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>

        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.finalPrice}>{formatCurrency(finalPrice)}</Text>
          {hasDiscount ? <Text style={styles.originalPrice}>{formatCurrency(Number(product.price))}</Text> : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 6,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 10,
    gap: 8,
  },
  title: {
    fontSize: 30 / 2,
    fontWeight: '700',
    color: '#111',
  },
  description: {
    color: '#777',
    fontSize: 13,
    lineHeight: 18,
    minHeight: 54,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  finalPrice: {
    fontSize: 30 / 2,
    fontWeight: '700',
    color: '#111',
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
  },
});
