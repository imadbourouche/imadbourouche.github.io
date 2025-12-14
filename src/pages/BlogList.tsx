import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getAllPosts } from '../lib/blog';
import { Clock, Calendar, PenTool } from 'lucide-react';
import { format } from 'date-fns';

export function BlogList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts().then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Writing & Thoughts
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Thoughts on software engineering, system design, and the latest web technologies.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all"
                            >
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <time>{format(new Date(post.date), 'MMM d, yyyy')}</time>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-slate-600 line-clamp-2">
                                        {post.summary}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-teal-600">
                                <PenTool className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-medium text-slate-900">Writing in Progress</h3>
                                <p className="text-slate-600 max-w-sm mx-auto">
                                    I'm currently crafting some interesting articles. Check back soon for updates!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
