import Link from "next/link";

export default function LadsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl">LAdS</h1>
      <p className="mb-8 text-lg">
        Welcome to Laan Drawing Solutions. We can support you with the
        digitization of archives or existing objects.
      </p>
      <Link href="/" className="text-primary-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
