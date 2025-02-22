import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  const sortedPosts = allPosts.sort((a, b) => {
    if (a.date > b.date) {
      return -1
    } else {
      return 1
    }
  })

  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && 
          <p>{post.description}</p> 
          }
          {post.date && 
          <p className="text-xs text-grey-900 dark:text-slate-400 uppercase">{new Date(post.date).toDateString()}</p>
          }
        </article>
      ))}
    </div>
  )
}