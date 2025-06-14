"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

export const Password = () => {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = Cookies.get("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      // Store authentication state in cookie
      Cookies.set("isAuthenticated", "true", { expires: 365 }); // Cookie expires in 1 year
      router.push("/");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword(""); // Clear the password field
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error when user starts typing
            }}
            className="border p-3 rounded-md text-center text-lg"
            placeholder="Enter password"
          />
          <Button type="submit" className="p-3 text-lg">
            Enter
          </Button>
        </form>
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
