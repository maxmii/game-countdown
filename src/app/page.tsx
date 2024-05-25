import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/gamesTable">Games Table</Link>
      </main>
    </>
  );
}
