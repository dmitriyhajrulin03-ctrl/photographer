import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Login",
  description: "Sign in to your account",
  noindex: true,
});

export default function LoginPage() {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
        {/* Login form will be here */}
      </div>
    </div>
  );
}




