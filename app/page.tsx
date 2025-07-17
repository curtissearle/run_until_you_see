export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">
          Run Until You See
        </h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to your Next.js webapp! This is the foundation for your &ldquo;Run Until You See&rdquo; application.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="text-sm text-center sm:text-left">
            <p className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                app/page.tsx
              </code>
            </p>
            <p>Save and see your changes instantly.</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
        <p>Built with Next.js {" "}</p>
        <p>•</p>
        <p>TypeScript</p>
        <p>•</p>
        <p>Tailwind CSS</p>
      </footer>
    </div>
  );
}
