"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = Cookies.get("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
    setIsLoading(false);
  }, []);

  // Show loading state or nothing while checking authentication
  if (isLoading) {
    return null;
  }

  // Don't render navbar if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Desktop navbar - hidden on mobile but maintains space */}
      <nav className="bg-gray-50 h-16 hidden md:block">
        <div className="flex flex-row text-3xl h-full gap-8 text-center items-center justify-center">
          <Link href="/info" className="hover:text-[#e60000] transition-colors">
            INFO
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000] transition-colors">
            RSVP
          </Link>
          <Link href="/faq" className="hover:text-[#e60000] transition-colors">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Mobile navbar - visible at bottom on mobile only */}
      <nav className="bg-gray-50 h-16 md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="flex flex-row text-2xl h-full gap-4 text-center items-center justify-center">
          <Link href="/info" className="hover:text-[#e60000] transition-colors">
            INFO
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000] transition-colors">
            RSVP
          </Link>
          <Link href="/faq" className="hover:text-[#e60000] transition-colors">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Spacer for mobile to prevent content from being hidden behind bottom navbar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
}
