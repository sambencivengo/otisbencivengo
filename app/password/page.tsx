"use client";

import {Password} from "../components/password";
import WeddingTitle from "../components/weddingTitle";

export default function PasswordPage() {
  return (
    <main className="h-full">
      <div className="my-20 flex flex-col justify-center">
        <WeddingTitle />
        <Password />
      </div>
    </main>
  );
}
