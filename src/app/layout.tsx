import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio Blog',
  description: 'A Next.js blog showcasing my web development journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}>
        <Navigation />
        <main className="min-h-screen py-8">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} My Portfolio Blog. Built with Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}