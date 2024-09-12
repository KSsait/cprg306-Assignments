import Link from "next/link"

export default function StudentInfo() {
    return (
      <main>
        <div>
          <h1>Student Information</h1>
          <p>Kris Senger</p>
          <Link href="https://github.com/KrisSenger/">GitHub Link</Link>
          <p></p>
          <Link href="/">Back to Home</Link>
        </div>
      </main>
    );
}