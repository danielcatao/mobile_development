# React Native Product Catalog App

Aplicação mobile desenvolvida com React Native + Expo Go para listagem de produtos por categorias, com autenticação local (hardcoded), tela de detalhes e tela de configurações.

## Tecnologias utilizadas

- React Native
- Expo SDK 55 (Expo Go)
- React Navigation
  - Native Stack
  - Bottom Tabs
  - Material Top Tabs
- DummyJSON API (produtos)
- Expo Vector Icons

## API consumida

- Base URL: `https://dummyjson.com`
- Documentação oficial: [DummyJSON Docs](https://dummyjson.com/docs)
- Endpoints utilizados:
  - `GET /products/category/{slug}`
  - `GET /products/{id}`

Categorias implementadas:

- Masculinas: `mens-shirts`, `mens-shoes`, `mens-watches`
- Femininas: `womens-bags`, `womens-dresses`, `womens-jewellery`, `womens-shoes`, `womens-watches`

## Estrutura do projeto

```text
mobile_development/
  src/
    components/
      ProductCard.js
    navigation/
      AppNavigator.js
    screens/
      HomeScreen.js
      LoginScreen.js
      ProductDetailScreen.js
      SettingsScreen.js
    services/
      api.js
  App.js
  app.json
  index.js
  package.json
```

## Funcionalidades

- Login com validação de usuário/senha hardcoded
- Listagem de produtos em grid (2 colunas)
- Top tabs para produtos masculinos e femininos
- Detalhes do produto com imagem, nome, descrição, preço e desconto
- Tela de configurações/perfil com logout

## Credenciais de acesso

- Usuário: `admin`
- Senha: `1234`

## Como executar

### Pré-requisitos

- Node.js 18+ (recomendado)
- npm
- Expo Go instalado no celular

### Instalação

```bash
npm install
```

### Rodando o app

```bash
npm start
```

Depois:

- Pressione `a` para Android Emulator, ou
- Escaneie o QR Code no Expo Go (dispositivo físico)

## Capturas de tela (referência)

As capturas usadas como referência de layout estão na pasta `prints/`:

- [Lista de produtos](prints/lista-de-produtos.png)
- [Detalhes do produto](prints/detalhes-do-produto.png)
- [Login](prints/login.png)
- [Configurações](prints/configuracoes.png)

## Observações

- O projeto foi estruturado em `src/screens`, `src/components`, `src/services` e `src/navigation`, conforme solicitado.
