
# Projeto Hemocentro

Olá! Você foi contratado para desenvolver um sistema de cadastro de doadores de sangue para o Hemocentro da sua cidade, utilizando a linguagem JavaScript e a função `prompt` para a entrada de dados.

O programa deve permitir o cadastro de doadores e deve conter as seguintes informações: nome, idade, peso, tipo sanguíneo e data da última doação.

Ao acessar o sistema, o usuário deve ser apresentado a um menu com as seguintes opções:

```
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
Escolha uma opção:
```

Ao selecionar uma opção, deve ser chamada uma função que execute a respectiva ação, conforme detalhamento abaixo:

**1. Cadastrar doador:** essa opção permite cadastrar um novo doador no sistema. O programa deve solicitar o nome, a idade, o peso, o tipo sanguíneo e a data da última doação do doador. O sistema deve armazenar essas informações em um objeto e esse objeto em um `array` de doadores.

**2. Listar doadores:** essa opção lista todos os doadores cadastrados no sistema, mostrando suas informações completas.

Exemplo:

```
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
João da Silva    |  25   |  70  |      AB-       |   01/01/2022  
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
José Almeida     |  45   |  80  |      O+        |   10/01/2022  
Ana Oliveira     |  27   |  58  |      B-        |   22/04/2022  
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------
```

**3. Buscar doador por tipo sanguíneo:** essa opção permite buscar doadores pelo seu tipo sanguíneo. O programa deve solicitar o tipo sanguíneo desejado e listar todos os doadores com o mesmo tipo sanguíneo.

```
Digite o tipo sanguíneo desejado: A+

------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
-----------------------------------------------------------------
```

**4. Buscar doador por data da última doação:** essa opção permite buscar doadores que fizeram a última doação antes de uma determinada data. O programa deve solicitar a data desejada e listar todos os doadores que fizeram a última doação antes dessa data.

Exemplo:

```
Digite a data desejada (dd/mm/aaaa): 01/03/2022

------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
Calito Teves     |  35   |  65  |      A+        |   01/03/2022  
Carla Maria      |  30   |  75  |      A-        |   01/03/2022  
-----------------------------------------------------------------
```

**5. Sair:** o programa deve encerrar.
