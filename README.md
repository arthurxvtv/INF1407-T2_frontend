# INF1407-T2 Frontend

Este é o frontend do projeto INF1407-T2, uma aplicação web para gerenciar reviews de jogos. A aplicação permite que os usuários se registrem, façam login, criem, editem e excluam reviews, além de alterar suas senhas.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
src/
    .DS_Store
    alterarSenha.html
    createReview.html
    editReview.html
    index.html
    js/
        PaginaAlterarSenha.js
        PaginaCreateReview.js
        PaginaEditReview.js
        PaginaLogada.js
        PaginaLogin.js
        PaginaRegister.js
        PaginaReviews.js
        ReviewsController.js
    login.html
    register.html
    ts/
        PaginaAlterarSenha.ts
        PaginaCreateReview.ts
        PaginaEditReview.ts
        PaginaLogada.ts
        PaginaLogin.ts
        PaginaRegister.ts
        PaginaReviews.ts
        ReviewsController.ts
tsconfig.json
```

## Funcionalidades

### Autenticação

- **Login**: Os usuários podem fazer login na aplicação. O código relevante está em [`src/ts/PaginaLogin.ts`](src/ts/PaginaLogin.ts).
- **Registro**: Os usuários podem se registrar na aplicação. O código relevante está em [`src/ts/PaginaRegister.ts`](src/ts/PaginaRegister.ts).
- **Logout**: Os usuários podem fazer logout da aplicação. O código relevante está em [`src/ts/ReviewsController.ts`](src/ts/ReviewsController.ts).

### Reviews

- **Listar Reviews**: Os usuários podem visualizar uma lista de reviews. O código relevante está em [`src/ts/PaginaReviews.ts`](src/ts/PaginaReviews.ts).
- **Criar Review**: Os usuários podem criar novas reviews. O código relevante está em [`src/ts/PaginaCreateReview.ts`](src/ts/PaginaCreateReview.ts).
- **Editar Review**: Os usuários podem editar reviews existentes. O código relevante está em [`src/ts/PaginaEditReview.ts`](src/ts/PaginaEditReview.ts).
- **Deletar Review**: Os usuários podem deletar reviews existentes. O código relevante está em [`src/ts/PaginaReviews.ts`](src/ts/PaginaReviews.ts).

### Alteração de Senha

- **Alterar Senha**: Os usuários podem alterar suas senhas. O código relevante está em [`src/ts/PaginaAlterarSenha.ts`](src/ts/PaginaAlterarSenha.ts).

## O Que faltou

### Recuperação de senha via e-mail

Não foi possível implementar a recuperação de senha por e-mail e nem o cadastro e alteração do e-mail pelo usuário.

### Adição de imagens

Não foi possível adicionar as imagens ao site.

### Estilização via arquivos CSS

Não foi possível estilizar o site via arquivos CSS.
