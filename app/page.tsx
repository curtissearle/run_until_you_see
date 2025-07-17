import RoleSpinner from './components/RoleSpinner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Run Until You See
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover your next role! Click the button and watch the magic happen.
          </p>
        </div>
        
        <RoleSpinner />
        
        <footer className="text-center mt-16 text-sm text-gray-500 dark:text-gray-400">
          <p>Built with Next.js • TypeScript • Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
