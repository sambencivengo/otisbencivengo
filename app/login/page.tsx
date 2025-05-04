'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Button } from "~/components/ui/button";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      //cookies.set("wedding_auth", "true", { expires: 30 });

      router.push("/"); // Redirect to a protected page
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Enter Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
          placeholder="Enter password"
        />
        <Button type="submit" className="p-2 mt-2">Submit</Button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
