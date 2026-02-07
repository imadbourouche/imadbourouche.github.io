import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { BlogPost as BlogPostType, getPostBySlug } from '../lib/blog';
import { ArrowLeft, Calendar, Clock, List, X } from 'lucide-react';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import 'highlight.js/styles/github-dark-dimmed.css';

export function BlogPost() {
    const { t, i18n } = useTranslation();
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [activeId, setActiveId] = useState<string>('');
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const locale = i18n.language === 'fr' ? fr : enUS;

    // 1. Extract headings for ToC
    const toc = useMemo(() => {
        if (!post?.content) return [];
        const headingLines = post.content.split('\n').filter((line) => line.match(/^#{1,3}\s/));

        return headingLines.map((line) => {
            const level = line.split('#').length - 1;
            const text = line.replace(/^#+\s/, '').trim();
            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            return { level, text, id };
        });
    }, [post?.content]);

    // 2. Fetch Post
    useEffect(() => {
        if (slug) {
            getPostBySlug(slug, i18n.language).then(setPost);
        }
    }, [slug, i18n.language]);

    // 3. Scroll Spy Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find((entry) => entry.isIntersecting);
                if (visibleEntry) setActiveId(visibleEntry.target.id);
            },
            { rootMargin: '-100px 0% -30% 0%', threshold: 1.0 }
        );

        const headings = document.querySelectorAll('h1[id], h2[id], h3[id]');
        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [post?.content]);

    // 4. Disable body scroll when image is zoomed
    useEffect(() => {
        if (selectedImg) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImg]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-slate-900 transition-colors">

            {/* --- IMAGE LIGHTBOX --- */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-10 right-10 text-white hover:text-teal-400 transition-colors">
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImg}
                        alt="Zoomed"
                        className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                </div>
            )}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[100px_1fr_250px] gap-12">

                {/* --- LEFT SPACER (Center alignment) --- */}
                <div className="hidden lg:block" aria-hidden="true"></div>

                {/* --- MIDDLE COLUMN (Main Content) --- */}
                <div className="w-full max-w-3xl mx-auto space-y-8">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-teal-600 group transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        {t('blog.back')}
                    </Link>

                    <header className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <time>{format(new Date(post.date), 'MMMM d, yyyy', { locale })}</time>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-32">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
                            components={{
                                img: ({ node, ...props }) => (
                                    <img
                                        {...props}
                                        className="rounded-xl cursor-zoom-in hover:opacity-95 transition-all shadow-md hover:shadow-xl"
                                        onClick={() => setSelectedImg(props.src || null)}
                                        loading="lazy"
                                    />
                                ),
                            }}
                        >
                            {post.content}
                        </Markdown>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (Table of Contents) --- */}
                <aside className="hidden lg:block">
                    <div className="sticky top-32 space-y-4">
                        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white uppercase text-xs tracking-wider">
                            <List className="w-4 h-4" />
                            Table of Contents
                        </div>
                        <nav className="flex flex-col border-l border-slate-200 dark:border-slate-800">
                            {toc.map((heading, index) => {
                                const isActive = activeId === heading.id;
                                return (
                                    <a
                                        key={index}
                                        href={`${window.location.hash.split('#')[1]}#${heading.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(heading.id)?.scrollIntoView();
                                        }}
                                        className={`text-sm transition-all duration-200 py-1 border-l-2 -ml-[2px] 
                                            ${heading.level === 1 ? 'pl-4' : ''}
                                            ${heading.level === 2 ? 'pl-6' : ''}
                                            ${heading.level === 3 ? 'pl-10 text-xs' : ''}
                                            ${isActive
                                                ? 'border-teal-600 text-teal-600 font-bold dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/10'
                                                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300'
                                            }`}
                                    >
                                        {heading.text}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </aside>
            </div>
        </article>
    );
}