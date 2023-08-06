import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks';

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.createdAt} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.createdAt), "LLLL d, yyyy")}
      </time>
      <div className="text-sm">
        {post.subtitle}
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)))

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Tudor Harries</h1>
      
    </div>
  )
}
