-- CreateTable
CREATE TABLE "empresa" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "cnpj" CHAR(14) NOT NULL,
    "nome" VARCHAR(80) NOT NULL,
    "email" VARCHAR(100) NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresa_uuid_key" ON "empresa"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_email_key" ON "empresa"("email");
