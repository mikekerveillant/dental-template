export const metadata = {
title: "Braces in Parañaque | Parañaque Smile Center",
description:
"Affordable braces and orthodontic treatments in Parañaque. Flexible payment options available.",
};

export default function BracesPage() {
return ( <main className="max-w-4xl mx-auto px-6 py-16"> <h1 className="text-5xl font-bold">
Braces in Parañaque </h1>

```
  <p className="mt-6 text-lg text-slate-600">
    Achieve a straighter, healthier smile with orthodontic treatment
    tailored to your needs.
  </p>

  <h2 className="mt-10 text-2xl font-bold">
    Types of Braces Available
  </h2>

  <ul className="mt-4 list-disc pl-6 text-slate-600">
    <li>Traditional Metal Braces</li>
    <li>Ceramic Braces</li>
    <li>Clear Aligners</li>
  </ul>

  <a
    href="https://wa.me/639171234567"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block rounded-full bg-sky-600 px-6 py-3 text-white"
  >
    Book Orthodontic Consultation
  </a>
</main>


);
}
