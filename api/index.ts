const express = require('express');
const { v4: uuidv4 } = require('uuid');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function generateUUID() {
    const uuidGenerated = uuidv4();

    return uuidGenerated;
}

const app = express();

const port = 3000;

app.listen(port, () =>
    console.log(`
🚀 API on-line: http://localhost:${port}

🔖 Endpoints:
    -> Cadastre uma empresa: http://localhost:${port}/cadastrar
    -> Liste as empresas: http://localhost:${port}/listar

⭐️ Acesse o repositório do GitHub: https://github.com/lucasgianine/uuid-generator`)
);

app.use(
    express.json()
);

app.post('/cadastrar', async (req, res) => {
    const uuid = generateUUID();
    const cnpj = req.body.cnpj;
    const nome = req.body.nome;
    const email = req.body.email;

    const firstEmail = await prisma.empresa.findFirst({
        where: {
            email: email
        }
    });

    if (firstEmail) {
        res.status(404).json('Já existe uma empresa com o email ' + email);
    } else {

        try {
            await prisma.empresa.create({
                data: {
                    uuid: uuid,
                    cnpj: cnpj,
                    nome: nome,
                    email: email
                }
            });
        } catch (error) {
            return console.log(error);
        } finally {
            res.status(201).json('Empresa criada com sucesso!\nReceba seu código de acesso: ' + uuid);
        }
    }
});

app.get('/empresa', async (_req, res) => {
    const empresa = await prisma.empresa.findMany({});

    res.status(200).json(empresa);
})