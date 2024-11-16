import Link from "next/link";

export default function LadsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl">LAdS</h1>
      <p className="mb-8 text-lg text-center text-black">
        Welkom bij Laan Drawing Solutions. We kunnen je ondersteunen bij de
        digitisering van archieven of bestaande objecten.
      </p>
      <Link href="/" className="text-primary-500 hover:underline">
        Terug naar Home
      </Link>
    </div>
  );
}
