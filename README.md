# Fala Einstein

Fala Einstein é um pequeno app que utiliza a API Speech para falar frases aleatórias do Albert Einstein. 
Desenvolvido em React Native & Expo. 

# Primeiros passos

- Em ambiente Windows, configure o PowerShell como Administrador, para evitar erros na execução de scripts, digitando:
```sh
$ Set-ExecutionPolicy Unrestricted (selecione a opção A-All)
```
  - Instale o expo-cli de forma global
```sh
$ npm install -g expo-cli
```
  - Para inicializar o projeto
```sh
$ expo init fala-einstein
$ cd fala-einstein
$ expo init
```

 - Para instalar a API Speech do Expo
```sh
$ cd fala-einstein
$ expo install expo-speech
$ expo init
```

### Instalação

Fala Eistein necessita do [node.js] para rodar.

Instale as dependências e devDependências e inicie o servidor

```sh
$ git clone https://github.com/ricardoleme/fala-einstein
$ cd fala-einstein
$ npm install -d
$ node app
```
### Gerando a APK para o Android 

- Obtenha uma conta gratuita do [Expo] antes de iniciar
- Edite o arquivo app.json e informe os dados do bundle, conforme exemplo:

```sh
"ios": {
      "bundleIdentifier": "br.edu.fatecitu.falaeinstein",
      "buildNumber": "1.0.0"
    },
"android": {
      "package": "br.edu.fatecitu.falaeinstein",
      "versionCode": 1
    },
```
- Digite o comando de geração da APK:
```sh
$ expo build:android -t apk
```
License
----

MIT


**Software Livre é vida!🐧**



   [node.js]: <http://nodejs.org>
   [Expo]: <https://expo.io/signup>
  

