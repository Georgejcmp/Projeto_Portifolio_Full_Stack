import { Tecnologia } from "@core"
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TecnologiaPrisma {
    constructor(private readonly prismaProvider: PrismaProvider) {}

    async abterTodas(): Promise<Tecnologia[]> {
        return this.prismaProvider.tecnologia.findMany()
    }

    async obterDestaques(): Promise<Tecnologia[]> {
        return this.prismaProvider.tecnologia.findMany({
            where: {
                destaque: true,
            },
        })
    }
}