"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

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
    <main className="flex">
      <div className="mx-auto">
        <Image src="/boat.png" width={800} height={600} alt="Drawing of a boat at sea" />
      </div>
    </main>
  );
}
