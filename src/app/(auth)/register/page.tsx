import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Register",
  description: "Create a new account",
  noindex: true,
});

export default function RegisterPage() {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-muted-foreground">Create a new account</p>
        {/* Registration form will be here */}
      </div>
    </div>
  );
}


