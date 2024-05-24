
# CRUD
Este projeto é uma solução para um teste téncico em Java utilizando Spring Boot.
O projeto consiste em um CRUD com Spring Boot para armazenamento de filmes. A ideia foi inspirada no 'The Movie DataBase'.
O projeto faz uso do Maven e algumas dependências do próprio Spring como:

```bash
SPRING DATA JPA
SPRING BOOT DEV TOOLS
SPRING WEB
LOMBOK
H2 DATABASE
```
Como um CRUD você pode adicionar filmes com suas informações principais e editá-las.
O projeto faz uso do H2 DataBase do próprio Spring para criar banco de dados temporário no momento que é iniciado a aplicação e depois ele é exlcuído no entanto nada impede de utilizar um banco de dados próprio para o projeto ou até mesmo um contêiner docker e por último configurar migrations para criação de tabelas.

### OBSERVAÇÃO
O projeto não possui uma classe 'Service' separada pois eu optei por colocá-las direta no Controller. Uma boa prática seria separa-lá no entanto, por se tratar de um projeto pequeno eu preferi aderir a esta solução.

## Instalação

Para instalar você pode clonar o projeto em sua máquina local

```bash
git clone https://github.com/akaisuishi/Crud-Movie-DataBase.git
```
    
## Rodando o projeto

Para rodar o projeto basta você executar o arquivo:
```bash
  Application.java
```
e em seguida abrir o navegador no link:
```bash
  http://localhost:8080/
```
Requisitos:

```bash
  Java 17
  Apache Maven
```
Lembrando que o projeto está utilizando Java 17, caso necessário altere nas estrutura do projeto (Project Structure) da sua IDE para a versão compatível.
