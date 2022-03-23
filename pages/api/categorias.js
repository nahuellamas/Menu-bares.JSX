// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from '@prisma/client'

let prisma

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true
    },
  })
  res.status(200).json(categorias)
}
