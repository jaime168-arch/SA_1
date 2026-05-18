# Pesquisa XAMPP - Já Ismaga

   O XAMPP é um pacote de software livre que funciona como um servidor local 
   completo, simulando o ambiente de produção para rodar a aplicação web da 
   Já Ismaga antes do deploy na nuvem.
   
   COMPONENTES E FINALIDADES:
   - Apache: Servidor web que processa as requisições HTTP do navegador.
   - MySQL/MariaDB: Banco de dados relacional (SGBD) para armazenar telemetria 
     de sensores e logins de operadores.
   - PHP: Linguagem back-end que executa a lógica do CRUD e as regras de automação.
   - phpMyAdmin: Interface gráfica web para gerenciamento simplificado do banco.
   
   INSTALAÇÃO E CONFIGURAÇÃO LOCAL:
   1. Ativar os serviços "Apache" e "MySQL" através do XAMPP Control Panel.
   2. Mover a pasta do projeto obrigatoriamente para dentro de 'xampp/htdocs/'.
   3. Executar e testar as interfaces no navegador via 'http://localhost/'.
   
   IMPORTÂNCIA DO AMBIENTE:
   Permite testes de integração em tempo real de hardware/software com custo 
   zero de hospedagem, validando scripts e dados de sensores com segurança.