const BASE_URL = 'https://dummyjson.com';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erro na API (${response.status})`);
  }

  return response.json();
}

export async function getProductsByCategory(category) {
  const data = await request(`/products/category/${category}`);
  return data.products || [];
}

export async function getProductsByCategories(categories) {
  const responses = await Promise.all(categories.map((category) => getProductsByCategory(category)));
  const allProducts = responses.flat();
  const uniqueProducts = Array.from(new Map(allProducts.map((item) => [item.id, item])).values());
  return uniqueProducts;
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}
