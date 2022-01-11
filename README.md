# Projeto Rede Social [Postgres+ NestJS + TypeScript + Prisma + JWT]

## Rotas: Usuários, Seguidores, Seguindo, Tweet e Categoria

##### Integração Backend + Postgresql + Prisma.

API com rotas e banco de dados distintos, através do VS Code.

**** Existem os seguintes Endpoints por rota:

[GET] Leitura de todos os itens
[GET] Leitura de itens individuais (por ID)
[POST] Cadastro
[PATCH] Edição de item por ID
[DELETE] Exclusão de item por ID

## **** Endpoints - Usuários ****

[GET] Leitura de todos os itens
http://localhost:3000/usuarios/

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/usuarios/id

[POST] Cadastro
http://localhost:3000/usuarios/


Todos os campos são obrigatórios:
```

{
  "nome": "String", 
  "imagem": "String",
  "bio": "String",
  "nascimento": "String",
  "senha": "String",
  "data_lancamento": "String", 
  "criado_em": "DateTime",
  "modificado_em": "DateTime",
  "seguidores": "Int",
  "seguindo: "Int",
  "tweet: "Int"
}

```

[PATCH] Edição de item por ID
http://localhost:3000/usuarios/id


Todos os campos são obrigatórios:
```

{ 
  "nome": "String", 
  "imagem": "String",
  "bio": "String",
  "nascimento": "String",
  "senha": "String",
  "data_lancamento": "String", 
  "criado_em": "DateTime",
  "modificado_em": "DateTime",
  "seguidores": "Int",
  "seguindo: "Int",
  "tweet: "Int"
}

```
[DELETE] Exclusão de item por ID
http://localhost:3000/usuarios/id

## **** Endpoints - Seguidores ****

[GET] Leitura de todos os itens
http://localhost:3000/seguidores/

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/seguidores/id

[POST] Cadastro
http://localhost:3000/seguidores/


Todos os campos são obrigatórios:
```

{
  "seguidoresid": "Int"
}

```
[PATCH] Edição de item por ID
http://localhost:3000/seguidores/id


Todos os campos são obrigatórios:
```

{ 
  "seguidoresid": "Int"
}

```

[DELETE] Exclusão de item por ID
http://localhost:3000/seguidores/id

## **** Endpoints - Seguindo ****

[GET] Leitura de todos os itens
http://localhost:3000/seguindo/

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/seguindo/id

[POST] Cadastro
http://localhost:3000/seguindo/


Todos os campos são obrigatórios:
```

{ 
   "idseguindo": "Int"
}

```
[PATCH] Edição de item por ID
http://localhost:3000/seguindo/id


Todos os campos são obrigatórios:
```

{ 
  "idseguindo": "Int"
}

```

[DELETE] Exclusão de item por ID
http://localhost:3000/seguindo/id

## **** Endpoints - Tweet ****

[GET] Leitura de todos os itens
http://localhost:3000/tweet/

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/tweet/id

[POST] Cadastro
http://localhost:3000/tweet/


Todos os campos são obrigatórios:
```

{
  "texto": "String", 
  "emoji": "String",
  "data_postagem": "DateTime",
  "curtidas": "Int",
  "conteudo": "String"
}

```

[PATCH] Edição de item por ID
http://localhost:3000/tweet/id


Todos os campos são obrigatórios:
```

{ 
  "texto": "String", 
  "emoji": "String",
  "data_postagem": "DateTime",
  "curtidas": "Int"
}

```
[DELETE] Exclusão de item por ID
http://localhost:3000/tweet/id

## **** Endpoints - Categoria ****

[GET] Leitura de todos os itens
http://localhost:3000/categoria/

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/categoria/id

[POST] Cadastro
http://localhost:3000/categoria/

[PATCH] Edição de item por ID
http://localhost:3000/categoria/id

Todos os campos são obrigatórios:
```

{
  "nome": "String", 
  "criado_em": "String"
}

```
[DELETE] Exclusão de item por ID
http://localhost:3000/categoria/id

### Projeto configurado e conectado ao Postgresql.


