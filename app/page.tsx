"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import WeddingTitle from "./components/weddingTitle";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on client side
    const auth = Cookies.get("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return null; // Don't show anything if not authenticated
  }

  return (
    <main className="w-full flex flex-col items-center gap-4 mx-auto font-jules font-bold text-center p-4 sm:p-6 md:p-8 lg:p-10 h-full">
      <WeddingTitle />

      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-red-500"></div>
    </main>
  );
}


