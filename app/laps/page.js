import Link from "next/link";

export default function LapsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl">LApS</h1>
      <p className="mb-8 text-lg text-center text-black">
        Welkom bij Laan Permit Solutions. We geven uitgebreide adviezen en
        uitvoering voor je vergunningen met gebruik van AI.
      </p>
      <Link href="/" className="text-primary-500 hover:underline">
        Terug naar Home
      </Link>
    </div>
  );
}
