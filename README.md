# App

## RFs (Requisitos funcionais)

- [ ] Deve autenticar usuário;
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível autenticar;
- [ ] Deve ser possivel obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de checkin realizado pelo usuário;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar checkin em uma academia;
- [ ] Deve ser possível validar o checkin de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNFs (Requisitos não funcionais)

- [ ] a senha do usuário precisa estar criptografada;
- [ ] os dados da aplicacao precisam estar persistidos (guardadas) em um banco PostgreSQL;
- [ ] todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] o usuário deve ser identificado por um JWT (JSON Web Token);

## RNs (Regras de negócio)

- o usuário não pode se cadastrar com um email duplicado;
- o usuário não pode fazer 2 checkins no mesmo dia;
- o usuário não pode fazer checkin se não estiver perto (100m) da academia;
- o checkin só pode ser realizado ate 20 minutos após criado;
- o checkin só pode ser validado por administradores;
- a academia só pode ser cadastrada por administradores;
