"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import WeddingTitle from "../components/weddingTitle";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on client side
    const auth = Cookies.get("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  if (!isAuthenticated) {
    return null; // Don't show anything if not authenticated
  }

  return (
    <main className="flex flex-col">
      <WeddingTitle />
      <div className="mx-auto pt-12">
        <Image src="/boat.png" quality={25} width={800} height={600} alt="Drawing of a boat at sea" />
      </div>
    </main>
  );
}
