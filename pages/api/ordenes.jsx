import {PrismaClient} from '@prisma/client';
export default async function handler(req, res) {
    let prisma

    if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
    } else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }

    prisma = global.prisma
    }


    if(req.method === 'POST') {
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha
            }
        });
        res.json(orden)
    }
}