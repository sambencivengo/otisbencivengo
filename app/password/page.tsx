"use client";

import { Password } from "../components/password";
import WeddingTitle from "../components/weddingTitle";

export default function PasswordPage() {

  return (

    <main className="w-full flex flex-col items-center gap-40 mx-auto font-jules font-bold text-center p-4 sm:p-6 md:p-8 lg:p-10 h-full">

      <WeddingTitle />
      <Password />
    </main>
  )
}
