/// <reference types="vite/client" />
import frontMatter from 'front-matter';


export interface BlogPost {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readTime: string;
    content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
    const posts: BlogPost[] = [];

    for (const path in modules) {
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        const content = await modules[path]() as string;
        const { attributes, body } = frontMatter<Omit<BlogPost, 'slug' | 'content'>>(content);
        posts.push({
            slug,
            content: body,
            ...attributes,
        });
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await getAllPosts();
    return posts.find((post: BlogPost) => post.slug === slug) || null;
}
