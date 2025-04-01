import { getAllPostIds, getPostData } from '@/lib/post';
import { format } from 'date-fns';
import Link from 'next/link';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  
  return (
    <article className="container mx-auto px-4 py-8 max-w-2xl">
      <Link 
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
      >
        ← Back to all posts
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      
      <div className="text-gray-600 dark:text-gray-400 mb-8">
        {format(new Date(postData.date), 'MMMM d, yyyy')}
      </div>
      
      <div 
        className="prose dark:prose-invert lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  );
}