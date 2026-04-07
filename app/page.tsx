import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  // Buscar produtos em destaque
  // O Prisma gera os tipos automaticamente baseados no seu schema.prisma
  const featuredProducts = await prisma.product.findMany({
    where: { isActive: true },
    take: 3,
  });

  const session = await getServerSession();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Sistema de Automações
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Gerencie, automatize e escale seus processos com facilidade.
          </p>
          <div className="mt-8 space-x-4">
            {session ? (
              <Link
                href="/dashboard"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Ir para o Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Entrar
                </Link>
                <Link
                  href="/auth/register"
                  className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Criar Conta
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Produtos em destaque */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Automações em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adicionamos a tipagem explícita 'any' ou o tipo do Prisma para passar no build */}
            {featuredProducts.map((product: any) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      R$ {Number(product.price).toFixed(2)}
                    </span>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Ver mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}