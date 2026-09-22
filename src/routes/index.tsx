import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
        Hello, World!
      </h1>
      <p className="mt-6 max-w-md text-base text-neutral-500 sm:text-lg">
        A clean, minimal starting point.
      </p>
    </main>
  );
}
