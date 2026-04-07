import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    // Aqui usamos a string direta ou buscamos do process.env
    url: "postgresql://postgres:Consta1%23%23@localhost:5432/site_automacoes",
  },
})