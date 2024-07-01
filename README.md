# Sistema de Votação Online para Condomínio

## Descrição do Projeto
Este projeto é um sistema de votação online para condomínios, desenvolvido em JavaScript e MySQL. O sistema permite o cadastro e a gestão de candidatos, chapas e eleições, bem como a realização da votação e contagem de votos de forma eficiente e segura.

## Funcionalidades
- Cadastro de candidatos
- Cadastro de cargos
- Cadastro de eleições
- Cadastro de chapas
- Associação de candidatos às chapas
- Gestão das votações (início e término)
- Cadastro e liberação de eleitores
- Geração de relatórios de inicialização e finalização da votação

## Estrutura do Projeto
- **Views**: Diretório onde estão localizadas as telas do sistema.
- **Routes**: Diretório onde estão definidas as rotas do sistema.
- **MySQL**: Diretório onde está o código script do banco de dados para o projeto, incluindo um arquivo .sql que pode ser aberto diretamente no MySQL, permitindo o usuário configurar o banco de dados do sistema no seu próprio MySQL.

## Como Iniciar
Para iniciar o projeto, siga os passos abaixo:

1. Execute o servidor backend com o seguinte comando no terminal:
    ```bash
    node server.js
    ```
2. Abra a tela `admin.html`, que está dentro do diretório `src/Views`, no navegador. Esta tela contém todas as outras telas de cadastro e relatório do sistema.

As rotas estão configuradas para rodar na porta `localhost 5000`.

Este projeto foi desenvolvido como parte de um trabalho acadêmico, seguindo as diretrizes fornecidas pelo docente.
