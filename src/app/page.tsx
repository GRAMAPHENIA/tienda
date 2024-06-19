import Link from "next/link";

import MaxWidthWrapper from "@/components/maxwidthwrapper/MaxWidthWrapper";

import { Zap, ShieldCheck, Gem } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

const advantages = [
  {
    name: "Entrega Inmediata",
    Icon: Zap,
    description:
      "Recibe tu recurso por correo electrónico en cuestión de segundos y descárgalo de inmediato para empezar a utilizarlo sin demoras.",
  },
  {
    name: "Garantia",
    Icon: ShieldCheck,
    description:
      "Todos los recursos en nuestra plataforma son verificados por nuestro equipo para garantizar nuestro estándar de calidad más alto.",
  },
  {
    name: "Acceso Exclusivo",
    Icon: Gem,
    description:
      "Accede a recursos exclusivos que no están disponibles en otras plataformas, garantizando contenido único y de alta calidad.",
  },
];

export default function Home() {
  return (
    <>
      {/* Seccion Hero */}

      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
            Tu mercado de
            <span className="text-emerald-950/40"> recursos digitales.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bienvenidos a Gramaphenia. Cada recurso es verificado por nuestro
            equipo para asegurar que cumple con los estándares de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              comercio en linea
            </Link>
            <Button variant="ghost">Nuestra calidad &rarr;</Button>
          </div>
        </div>
        {/* TODO: Lista de productos */}
      </MaxWidthWrapper>

      {/* Seccion Ventajas */}

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {advantages.map((advantage) => (
              <div
                key={advantage.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-900/10">
                    {<advantage.Icon className="w-1/3 h-1/3 text-slate-600" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-emerald-950/80">
                    {advantage.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
