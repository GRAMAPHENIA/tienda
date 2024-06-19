"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const itemCount = 0;
  const fee = 1;

  return (
    <div>
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
          <ShoppingCart
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle className="text-center">Compras (0)</SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6 font-semibold text-slate-900/80">
                {/* TODO: Logica del carro */}
                Artículos en el carrito
              </div>
              <div className="space-y-4 pr-6">
                <Separator />
                <div className="space-y-1.5 text-sm">
                  <div className="flex">
                    <span className="flex-1">Envío</span>
                    <span>Gratis</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Operación gratuita</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Total</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Continuar con el pago
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div className="relative mb-4 h-32 w-32 text-muted-foreground">
                <Image
                  src="/carro/carro.svg"
                  alt="Sin items en el carro de compras."
                  //   fill
                  height={200}
                  width={200}
                />
              </div>
              <div className="text-xl font-semibold">
                Aún no has agregado productos.
              </div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  ¡Añade productos para continuar!
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
