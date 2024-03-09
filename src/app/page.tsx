import Link from 'next/link';

import Nav from './components/layout/MainNavigation';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/gamesTable">Games Table</Link>
      </main>
    </>
  );
}
