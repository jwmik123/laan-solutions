import Link from "next/link";

export default function LapsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl">LApS</h1>
      <p className="mb-8 text-lg">
        Welcome to Laan Permit Solutions. We provide thorough advice and
        execution for your permit needs.
      </p>
      <Link href="/" className="text-primary-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
