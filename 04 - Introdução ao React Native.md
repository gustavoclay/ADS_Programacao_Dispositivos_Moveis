---
marp: true
theme: default
paginate: true
author: Gustavo Clay
title: 'Aula 4: Introdução ao React Native'
header: 'Programação para Dispositivos Móveis - Aula 4: Introdução ao React Native'
footer: '![height:120px](./images/iesb-1.png)'
transition: fade-out
size: 4:3
style: |
  section {
    font-size: 2.0em;
  }
---

# Aula 4: Introdução ao React Native

Prof. Gustavo Clay

---

## Objetivos da Aula

1. Entender o que é **Node e NPM**.
2. Entender o que é **React**.
3. Entender o que é **React Native**.
4. Conhecer o **Expo** e suas funcionalidades.
5. Criar um projeto inicial com Expo.
6. Executar o projeto em um dispositivo ou emulador.

---

# Node e NPM

---

## Introdução ao npm e Comandos Básicos

### O que é Node.js?

- **Node.js**: Ambiente de execução JavaScript que permite rodar código JavaScript no servidor.
- Utiliza o motor V8 do Google Chrome para executar código JavaScript.
- Ideal para construir aplicações de rede escaláveis e de alta performance.

---

### O que é npm?

- **npm** (Node Package Manager): Gerenciador de pacotes padrão para Node.js.
- Permite instalar, compartilhar e gerenciar dependências de projetos JavaScript.
- Possui um repositório online com milhares de pacotes disponíveis.

---

### Estrutura do package.json

<!-- _footer: '' -->

- **package.json**: Arquivo de configuração do projeto Node.js.
- Contém informações sobre o projeto e suas dependências.
- Estrutura básica:
  ```json
  {
    "name": "nome-do-projeto",
    "version": "1.0.0",
    "description": "Descrição do projeto",
    "main": "index.js",
    "scripts": {
      "start": "node index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Seu Nome",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    }
  }
  ```

---

### Comandos Básicos do npm

- **npm init**: Cria o arquivo package.json interativamente.
  ```bash
  npm init
  ```
- **npm start**: Inicia a aplicação (se configurado no package.json).
  ```bash
  npm start
  ```

---

- **npm install <pacote>**: Instala pacotes no projeto e adiciona ao package.json.
  ```bash
  npm install express
  ```
- **npm install**: Instala todas as dependências listadas no package.json.
  ```bash
  npm install
  ```

---

# React e React Native

---

## O que é React?

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- Desenvolvida pelo Facebook e lançada em 2013.
- Baseada em componentes reutilizáveis.
- Utiliza um DOM virtual para otimizar atualizações de interface.

---

## Elementos do React

1. **JSX**: Sintaxe para escrever componentes.
2. **Componentes**: Blocos de construção da interface.
3. **Props**: Propriedades passadas para os componentes.
4. **State**: Dados internos do componente.
5. **Hooks (Ciclo de Vida)**: Métodos executados em diferentes fases do componente.

---

### O que é o JSX?

- JSX é uma extensão de sintaxe para JavaScript que permite que você escreva marcação semelhante a HTML dentro de um arquivo JavaScript.
- Embora existam outras maneiras de escrever componentes, a maioria dos desenvolvedores React prefere a concisão do JSX, e a maioria das bases de código o usa.

---

![bg 90%](images/jsx.png)

---

![bg 90%](images/jsx2.png)

---

### O que são Componentes?

- Componentes são os blocos de construção da interface do usuário em React.
- Podem ser definidos como classes ou funções.
- Componentes podem receber dados através de props e gerenciar seu próprio estado.

---

![bg 65%](images/components.png)

---

### O que são Props?

- Props (propriedades) são dados passados para os componentes.
- São imutáveis e permitem que componentes sejam reutilizáveis e configuráveis.
- Passados como atributos em elementos JSX.

---

### O que é State?

- State (estado) é um objeto que armazena dados internos do componente.
- Diferente das props, o state é mutável.
- Alterações no state causam re-renderização do componente.

---

### O que são Hooks?

- Hooks são funções que permitem o uso de state e outras funcionalidades do React em componentes funcionais.
- Exemplos: `useState`, `useEffect`, `useContext`.
- Simplificam o gerenciamento de estado e efeitos colaterais.

---

## O que é React Native?

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- Permite criar aplicativos para iOS e Android usando JavaScript e React.
- Desenvolvido pelo Facebook e lançado em 2015.

---
## O que é React Native?

![](images/native.png)

---

### Vantagens do React Native

1. **Código compartilhado**: Escreva uma vez, execute em iOS e Android.
2. **Desempenho nativo**: Componentes nativos para melhor desempenho.
3. **Comunidade ativa**: Grande quantidade de bibliotecas e suporte.
4. **Hot Reloading**: Atualizações instantâneas durante o desenvolvimento.

---

### Arquitetura do React Native

- **JavaScript**: Código JavaScript que interage com a interface.
- **Bridge**: Comunicação entre JavaScript e código nativo.
- **Código Nativo**: Código específico para iOS e Android.

---

<!-- _footer: '' -->

![bg fit 70%](images/native-arq.png)

---

# Expo

---

## O que é Expo?

- **Expo**: Plataforma para desenvolvimento de aplicativos React Native.
- Facilita a criação, execução e publicação de aplicativos.
- Inclui ferramentas e serviços para desenvolvimento rápido.

---

### Funcionalidades do Expo

1. **Expo CLI**: Ferramenta de linha de comando para gerenciar projetos.
2. **Expo Go**: Aplicativo para visualizar projetos em dispositivos reais.
3. **Expo SDK**: Conjunto de APIs e componentes prontos para uso.
4. **Expo Snack**: Editor online para experimentar código React Native.

---

## Requisitos para Desenvolvimento

1. **Node.js**: Ambiente de execução JavaScript.
2. **Expo CLI**: Ferramenta de linha de comando.
3. **Expo Go**: Aplicativo para visualização de projetos.
4. **Emulador ou dispositivo iOS/Android.**
5. **O dispositivo e o computador devem estar na mesma rede (Wifi).**

---

## Instalando o Expo CLI

1. Certifique-se de ter o Node.js instalado.
2. No terminal, execute o comando:
   ```bash
   npm install -g expo-cli
   ```

---

## Criando um Projeto com Expo

1. No terminal, execute o comando:
   ```bash
   npx create-expo-app@latest nome-projeto --template blank
   ```
2. Escolha o template "blank" (em branco).
3. Navegue até o diretório do projeto:
   ```bash
   cd meu-projeto
   ```

---

## Estrutura do Projeto

- **App.js**: Arquivo principal do aplicativo.
- **assets/**: Pasta para recursos como imagens e fontes.
- **node_modules/**: Dependências do projeto.
- **package.json**: Arquivo de configuração do projeto.

---

## Executando o Projeto

1. No terminal, execute o comando:
   ```bash
   expo start
   ```
2. Escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo.
3. Ou escolha a opção para executar em um emulador (iOS ou Android).

---

## Código Inicial do App.js

---

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## Personalizando o Projeto

1. **Alterar o texto**: Modifique o texto dentro do componente `<Text>`.
2. **Adicionar estilos**: Adicione ou modifique estilos no objeto `styles`.
3. **Adicionar componentes**: Utilize componentes como `<Button>`, `<Image>`, `<TextInput>`, etc.

---

## Componentes Core

- **View**: Container para outros componentes.
- **Text**: Exibe texto.
- **Image**: Exibe imagens.
- **Button**: Botão clicável.
- **TextInput**: Campo de entrada de texto.
- **ScrollView**: Container com rolagem.

---

![bg 70%](images/rn_core_components.png)

---

## Prática e Exercícios
