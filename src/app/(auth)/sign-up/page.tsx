"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons/Icons";
import { buttonVariants, Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validators";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    // Enviar datos al servidor
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Crear una cuenta</h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              ¿Ya tienes una cuenta?{" "}
              <span className="text-blue-800/70">inicia sesión</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {" "}
              {/* Agrega handleSubmit para manejar el envío */}
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label className="mb-2" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    {...register("email")} // Registra el campo "email" usando register
                    className={cn({
                      "focus-visible:ring-red-500/60": errors.email,
                    })}
                    placeholder="usuario@ejemplo.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label className="mb-2" htmlFor="password">
                    Contraseña
                  </Label>
                  <Input
                    {...register("password")} // Registra el campo "password" usando register
                    type="password" // Asegúrate de que sea un campo de contraseña
                    className={cn({
                      "focus-visible:ring-red-500/60": errors.password,
                    })}
                    placeholder="password"
                  />
                </div>
                <Button type="submit">Iniciar sesión</Button>{" "}
                {/* Agrega type="submit" al botón */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
