'use client'

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import React from "react";
export const Password = () => {

  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {

      router.push("/"); // Redirect to a protected page
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
          placeholder="Enter password"
        />
        <Button type="submit" className="p-2 mt-2">Enter</Button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
