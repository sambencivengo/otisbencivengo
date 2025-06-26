"use client";

import {useRouter} from "next/navigation";
import {Button} from "~/components/ui/button";
import React, {useEffect} from "react";
import Cookies from "js-cookie";
import {Input} from "~/components/ui/input";
import {ArrowRight} from "lucide-react";

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

    if (password.length === 0) {
      return;
    }
    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      // Store authentication state in cookie
      Cookies.set("isAuthenticated", "true", {expires: 365}); // Cookie expires in 1 year
      router.push("/");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword(""); // Clear the password field
    }
  };

  return (
    <div className="w-full flex flex-col justify-center space-y-4 p-8">
      <div className="w-[300px] mx-auto flex flex-col items-center justify-center">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-row">
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear error when user starts typing
              }}
              className="border p-3 rounded-md text-center text-lg rounded-r-none"
              placeholder="Password"
            />
            <Button type="submit" className=" text-lg rounded-l-none">
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>

      {error && (
        <div className="max-w-[400px] mx-auto p-2 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}
    </div>
  );
};
