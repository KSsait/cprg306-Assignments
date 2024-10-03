import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="text-4xl text-center text-green-500 font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="mt-2 text-center text-2xl text-purple-100">
          <Link href="/week-2">Week 2</Link> 
        </li>
        <li className="mt-2 text-center text-2xl text-purple-200">
          <Link href="/week-3">Week 3</Link>
        </li>
        <li className="mt-2 text-center text-2xl text-purple-300">
          <Link href="/week-4">Week 4</Link>
        </li>
        <li className="mt-2 text-center text-2xl text-purple-400">
          <Link href="/week-5">Week 5</Link>
        </li>
      </ul>
    </main>
  );
}