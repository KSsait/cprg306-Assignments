import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col bg-black h-screen">
      <h1 className="text-4xl text-center text-green-500 font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="mt-2 text-center text-xs text-purple-100">
          <Link href="/week-2">Week 2 - Basic Student Info</Link> 
        </li>
        <li className="mt-2 text-center text-sm text-purple-200">
          <Link href="/week-3">Week 3 - Shopping Item List</Link>
        </li>
        <li className="mt-2 text-center text-base text-purple-300">
          <Link href="/week-4">Week 4 - Counter Component</Link>
        </li>
        <li className="mt-2 text-center text-lg text-purple-400">
          <Link href="/week-5">Week 5 - Interactivity with Forms</Link>
        </li>
        <li className="mt-2 text-center text-xl text-purple-600">
          <Link href="/week-6">Week 6 - Handling Lists</Link>
        </li>
        <li className="mt-2 text-center text-2xl text-purple-700">
          <Link href="/week-7">Week 7 - Managing State</Link>
        </li>
        <li className="mt-2 text-center text-3xl text-purple-800">
          <Link href="/week-8">Week 8 - Fetching Data</Link>
        </li>
        <li className="mt-2 text-center text-4xl text-purple-900">
          <Link href="/week-9">Week 9 - Authentication</Link>
        </li>
        <li className="mt-2 text-center text-5xl text-purple-800">
          <Link href="/week-10">Week 10 - Cloud Firestore</Link>
        </li>
      </ul>
      <div className="absolute right-0 left-0 bottom-0 text-center text-red-600 mb-10">
        <Link href="/test" className="text-2xl">!Test!</Link> 
      </div>
    </main>
  );
}