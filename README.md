Consumindo a API de gerar UUIDs dentro de uma API REST conectada com banco de dados relacional (PostgreSQL)

## Modo de usar
### 1. Instale as dependências
```bash
npm install
```

### 2. Crie um container no Docker (port 5533)
```bash
docker compose up
```

### 3. Inicialize o Prisma
```bash
npx prisma generate
```

### 4. Execute a migration do Prisma
```bash
npx prisma migrate dev init
```

### 5. Crie um arquivo `.env` para criar uma variável de ambiente
```env
DATABASE_URL="URL_DO_BANCO_DE_DADOS_POSTGRESQL"
```

### 6. Execute o arquivo
```bash
npm run dev
```

## Referência
- https://www.uuidgenerator.net/api
- https://www.uuidtools.com/docs
- https://github.com/inobrasil/restAPI-database-connection