// components/Hero.tsx
import Link from 'next/link';

export function Hero() {
    return (
      <section className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Build Your Portfolio Effortlessly
          </h1>
          <p className="text-lg mb-6">
            Choose your layout, customize your theme, and showcase your talent.
          </p>
          <Link href="/auth/signup" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md">
            Get Started Now
          </Link>
        </div>
      </section>
    );
  }
  