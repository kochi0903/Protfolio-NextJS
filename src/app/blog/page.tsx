import Link from 'next/link';
import { format } from 'date-fns';
import { getSortedPostsData } from '@/lib/post';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
      
      <div className="grid gap-6">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <div key={id} className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm">
            <Link href={`/blog/${id}`}>
              <h2 className="text-xl font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400">{title}</h2>
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
    </div>
  );
}