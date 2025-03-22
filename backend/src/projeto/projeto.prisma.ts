import { Projeto } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjetoPrisma {
    constructor(private readonly Prisma: PrismaProvider) {}

    async obterTodos(): Promise<Projeto[]> {
        return this.Prisma.projeto.findMany() as any
    }

    async obterPorId(id: number): Promise<Projeto | null> {
        return this.Prisma.projeto.findUnique({ 
            where: { id }, 
            include: { tecnologias: true },
        }) as any
    }
}



