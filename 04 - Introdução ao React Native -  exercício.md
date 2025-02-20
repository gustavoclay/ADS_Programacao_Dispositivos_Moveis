## Exercício Prático: Criando um Aplicativo com Dados de um Time ou Jogador

### Objetivo

Neste exercício, você irá criar um aplicativo simples usando React Native e Expo. O aplicativo exibirá informações e imagens de um time ou jogador de sua escolha.

### Passos

1. **Escolha um time ou jogador**: Decida qual time ou jogador você deseja exibir no aplicativo.

2. **Instale o Node.js**: Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

3. **Instale o Expo CLI**: No terminal, execute o comando:

   ```bash
   npm install -g expo-cli
   ```

4. **Crie um novo projeto Expo**: No terminal, execute o comando:

   ```bash
   npx create-expo-app@latest meu-time --template blank
   ```

5. **Navegue até o diretório do projeto**:

   ```bash
   cd meu-time
   ```

6. **Abra o projeto no VS Code**:

   ```bash
   code .
   ```

7. **Inicie o projeto**: No terminal, execute o comando:

   ```bash
   expo start
   ```

8. **Abra o arquivo `App.js`**: No VS Code, abra o arquivo `App.js`.

9. **Importe os componentes necessários**: Adicione as importações no início do arquivo:

   ```javascript
   import React from "react";
   import { StatusBar } from "expo-status-bar";
   import {
     Button,
     Image,
     StyleSheet,
     Text,
     View,
     ScrollView,
   } from "react-native";
   ```

10. **Nome do Jogador**: Adicione um componente `Text` com estilização personalizada para exibir o nome do time ou jogador com uma fonte maior.

11. **Informações do Jogador**: Adicione varios componentes `Text` para exibir informações sobre o time ou jogador.

12. **Adicione 5 imagens**: Adicione 5 imagens do time ou jogador.

13. **Estilize o container**: Adicione estilos personalizados ao container no objeto `styles`.

14. **Crie uma função `alerta`**: Dentro do componente `App`, crie a função `alerta` para exibir um alerta quando um botão for clicado:

    ```javascript
    alert("Gol do Jogador/Time!");
    ```

15. **Adicione um botão**: Adicione um componente `Button` com o titulo `GOL` que chama a função `alerta` quando clicado.

16. **Para testar o aplicativo**: No terminal, execute o comando:
    ```bash
    expo start
    ```
    Escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo ou execute em um emulador.
