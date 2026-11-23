import { Link, useParams } from 'react-router-dom';
import { posts, formatDate } from '../data/posts';
import { useReveal, usePageMeta } from '../hooks/effects';
import { ArrowLeft, ArrowUpRight } from '../components/Icons';

export function BlogIndex() {
  usePageMeta(
    'Blog — Roberto Ulloa',
    'Short, practical notes on building, testing and shipping web and mobile products.',
  );
  useReveal();

  return (
    <section className="section page-section" aria-labelledby="blog-title">
      <div className="container">
        <div className="page-heading intro-fade">
          <p className="eyebrow">Blog</p>
          <h1 id="blog-title" className="page-title">Notes from shipping <span className="gradient-text">real products.</span></h1>
          <p>
            Short, practical write-ups on building, testing and releasing web and mobile apps, mostly from things that
            broke and what I learned fixing them.
          </p>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <Link className="post-row spotlight" data-reveal to={`/blog/${post.slug}`} key={post.slug}>
              <p className="post-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
              </p>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <ul className="tag-list" aria-label="Topics">
                  {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <span className="post-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ block }) {
  if (block.h2) return <h2>{block.h2}</h2>;
  if (block.ul) return <ul>{block.ul.map((item) => <li key={item}>{item}</li>)}</ul>;
  if (block.code) return <pre><code>{block.code}</code></pre>;
  return <p>{block.p}</p>;
}

export function BlogPost() {
  const { slug } = useParams();
  const index = posts.findIndex((post) => post.slug === slug);
  const post = posts[index];

  usePageMeta(
    post ? `${post.title} — Roberto Ulloa` : 'Post not found — Roberto Ulloa',
    post?.excerpt,
  );
  useReveal([slug]);

  if (!post) {
    return (
      <section className="section page-section">
        <div className="container narrow">
          <h1 className="page-title">Post not found.</h1>
          <Link className="button button-secondary" to="/blog"><ArrowLeft /> Back to the blog</Link>
        </div>
      </section>
    );
  }

  const next = posts[index + 1] ?? posts[0];

  return (
    <article className="section page-section" aria-labelledby="post-title">
      <div className="container narrow">
        <Link className="back-link" to="/blog"><ArrowLeft /> All posts</Link>
        <header className="post-header intro-fade">
          <p className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
          </p>
          <h1 id="post-title" className="page-title">{post.title}</h1>
          <ul className="tag-list" aria-label="Topics">
            {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </header>
        <div className="prose" data-reveal>
          {post.body.map((block, i) => <Block block={block} key={i} />)}
        </div>
        {next.slug !== post.slug && (
          <Link className="next-post spotlight" to={`/blog/${next.slug}`}>
            <span className="eyebrow">Read next</span>
            <strong>{next.title}</strong>
            <ArrowUpRight />
          </Link>
        )}
      </div>
    </article>
  );
}
