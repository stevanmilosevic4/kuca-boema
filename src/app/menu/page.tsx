"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/*
  Preusmerenje /menu -> /jelovnik.

  Stari sajt (i odštampani QR kodovi na stolovima) koriste kucaboema.rs/menu,
  pa ova stranica postoji samo da gosta odmah prosledi na novi jelovnik.
*/
export default function MenuRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/jelovnik/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-wine-dark text-cream">
      <p className="px-6 text-center">
        Otvaramo jelovnik…{" "}
        <Link href="/jelovnik/" className="text-gold-soft underline">
          kliknite ovde
        </Link>{" "}
        ako se ne otvori sam.
      </p>
    </main>
  );
}
