import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold">Tech Blog - Encoded Coder</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-8">
        <article className="mb-8">
          <h2 className="text-2xl font-bold">Latest Post</h2>
          <p className="mt-2">
            Welcome to the latest post on our tech blog. Stay tuned for more
            updates!
          </p>
        </article>
        <section>
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <ul className="mt-4 space-y-4">
            <li className="border-b pb-4">
              <h3 className="text-xl font-semibold">Post Title 1</h3>
              <p className="mt-1">A brief description of the first post.</p>
            </li>
            <li className="border-b pb-4">
              <h3 className="text-xl font-semibold">Post Title 2</h3>
              <p className="mt-1">A brief description of the second post.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="mt-16 text-center">
        <p>&copy; 2025 Tech Blog - Encoded Coder. All rights reserved.</p>
      </footer>
    </div>
  );
}
