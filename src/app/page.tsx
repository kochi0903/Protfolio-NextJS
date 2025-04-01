import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPostsData } from '@/lib/post';

export default function Home() {
  const allPostsData = getSortedPostsData();
  
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hi! I'm a web developer with a passion for React and Next.js.
          This blog showcases my journey and learnings in web development.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid gap-6">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <div key={id} className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blog/${id}`}>
                <h3 className="text-xl font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400">{title}</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {format(new Date(date), 'MMMM d, yyyy')}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
              <Link 
                href={`/blog/${id}`}
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}