import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { BlogPost as BlogPostType, getPostBySlug } from '../lib/blog';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

export function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPostType | null>(null);

    useEffect(() => {
        if (slug) {
            getPostBySlug(slug).then(setPost);
        }
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto space-y-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to list
                </Link>

                <header className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-teal-600 hover:prose-a:text-teal-700 max-w-none">
                    <Markdown>{post.content}</Markdown>
                </div>
            </div>
        </article>
    );
}
