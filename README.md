# map-project-node

### Versões:
  - **Node:** `v19.2.0`
  - **Postgres:** `v16.1`

### 1. Adicione as variáveis de ambiente
 - (Siga o indicado no `exemple.env` e preencha com suas especificações de ambiente)

### 2. Carregue o DDL
```SQL
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    telefone BIGINT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);
```
### 3. Instale os pacotes do projeto
 - (`yarn` ou `npm i`)

### 4. Execute o projeto
 - (`yarn dev` ou `npm run dev`)
