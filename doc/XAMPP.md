# Pesquisa XAMPP - Já Ismaga

<img src="../assets/xampp.png" width="300">

   O que é XAMPP?
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

   Ao instalá-lo, cada usuário fica à disposição de um servidor Apache para hospedar páginas web, MySQL para gerenciamento de bancos de dados e suporte a PHP e Perl para desenvolvimento de aplicações dinâmicas.

   Vantagens:
   Fácil Instalação: Agrupa os serviços mais importantes em um clique.
   Sem Custo: É um software totalmente livre e gratuito.
   Praticidade: Permite ligar e desligar os serviços facilmente através de um Painel de Controle unificado. 

   Desvantagens:
   Falta de isolamento real: Diferente de tecnologias como Docker, o XAMPP altera diretórios diretamente na máquina e pode causar conflitos de portas.
   Segurança: O ambiente não é seguro para ambientes de produção (sites reais na internet) por vir configurado de fábrica para facilitar os testes, com senhas padrão fáceis ou vazias.
   Hábito de iniciante: Alguns desenvolvedores preferem instalar os serviços manualmente ou usar contêineres para entender exatamente como a infraestrutura web funciona nos bastidores. 

   IMPORTÂNCIA DO AMBIENTE:
   Permite testes de integração em tempo real de hardware/software com custo 
   zero de hospedagem, validando scripts e dados de sensores com segurança.