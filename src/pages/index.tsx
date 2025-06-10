import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-xl">
        <Image
          src="/logo-rompi-01.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Instruções */}
        <section className="bg-gray-50 text-white dark:bg-gray-900 rounded-lg p-6 shadow-md w-full">
          <h2 className="text-lg font-semibold mb-4">
            Instruções para começar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm leading-6 font-[family-name:var(--font-geist-mono)]">
            <li>
              Instale as dependências com{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm install
              </code>
              .
            </li>
            <li>
              Execute o servidor de desenvolvimento com{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm run dev
              </code>
              .
            </li>
            <li>
              Acesse{" "}
              <a
                href="http://localhost:3000"
                className="text-blue-600 underline"
              >
                http://localhost:3000
              </a>{" "}
              no navegador.
            </li>
            <li>
              Para rodar os testes unitários, use{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm test
              </code>
              .
            </li>

            <li>
              Para mais informações leia o arquivo README.me na raiz do projeto{" "}
              .
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
