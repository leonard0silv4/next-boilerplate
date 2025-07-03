// src/pages/index.tsx
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLanguage = (lng: string) => {
    router.push(asPath, asPath, { locale: lng });
  };

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

        <section className="bg-gray-50 text-white dark:bg-gray-900 rounded-lg p-6 shadow-md w-full">
          <h2 className="text-lg font-semibold mb-4">
            {t("instructions.title")}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm leading-6 font-[family-name:var(--font-geist-mono)]">
            <li>
              {t("instructions.install")}{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm install
              </code>
              .
            </li>
            <li>
              {t("instructions.runDev")}{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm run dev
              </code>
              .
            </li>
            <li>
              {t("instructions.access")}
              <a
                href="http://localhost:3000"
                className="text-blue-600 underline"
              >
                http://localhost:3000
              </a>
              .
            </li>
            <li>
              {t("instructions.test")}{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                npm test
              </code>
              .
            </li>
            <li>{t("instructions.readme")}</li>
          </ol>
          <div className="flex justify-center gap-2 mt-5">
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("pt-BR")}
            >
              🇧🇷
            </button>
            <button
              className="cursor-pointer"
              onClick={() => changeLanguage("en-US")}
            >
              🇺🇸
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
