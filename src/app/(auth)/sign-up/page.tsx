"use client";

import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

import { Icons } from "@/components/icons/Icons";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

// Asegúrate de importar la función `cn` si es necesaria
import { cn } from "@/lib/utils"; // Ejemplo de cómo se podría importar `cn` si está definida en otro archivo

const page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">crear una cuenta</h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5", // Uso correcto de `:`
              })}
              href="/sign-in"
            >
              ¿Ya tienes una cuenta? Iniciar sesión
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="focus-visible:ring-red-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className="focus-visible:ring-red-500"
                    placeholder="password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
