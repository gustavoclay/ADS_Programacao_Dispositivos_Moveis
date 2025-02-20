
## Exercício: Criando um Repositório no GitHub

### Objetivo

Neste exercício, você irá criar um repositório no GitHub para utilizar na disciplina e adicionar um arquivo `.gitignore` gerado pelo gitignore.io com as tecnologias Visual Studio Code e React Native.

### Passos

1. **Crie um repositório no GitHub**:
   - Acesse [github.com](https://github.com/).
   - Faça login na sua conta.
   - Clique em "New repository".
   - Preencha os campos:
     - Repository name: `nome-do-repositorio`
     - Description: `Repositório para a disciplina de Programação para Dispositivos Móveis`
     - Public ou Private: selecione Public.
   - Clique em "Create repository".

2. **Clone o repositório para o seu computador**:
   - Copie o link do repositório no GitHub.
   - No terminal, execute o comando:
     ```bash
     git clone https://github.com/seuusuario/nome-do-repositorio.git
     ```
   - Navegue até o diretório do repositório:
     ```bash
     cd nome-do-repositorio
     ```

3. **Adicione um arquivo `.gitignore`**:
   - Acesse [gitignore.io](https://www.toptal.com/developers/gitignore).
   - Digite `Visual Studio Code, React Native` e clique em "Create".
   - Copie o conteúdo gerado.
   - No VS Code, crie um arquivo chamado `.gitignore` na raiz do repositório.
   - Cole o conteúdo copiado no arquivo `.gitignore`.

4. **Faça o commit e envie para o GitHub**:

  - Utilize o vscode ou o terminal para realizar os comandos abaixo:
   - Adicione os arquivos ao repositório:
     ```bash
     git add .
     ```
   - Faça um commit:
     ```bash
     git commit -m "Adiciona arquivo .gitignore"
     ```
   - Envie as mudanças para o GitHub:
     ```bash
     git push origin main
     ```

5. **Verifique no GitHub**:
   - Acesse o repositório no GitHub e verifique se o arquivo `.gitignore` foi adicionado corretamente.
