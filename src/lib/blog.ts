/// <reference types="vite/client" />
import frontMatter from 'front-matter';


export interface BlogPost {
    slug: string;
    language: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readTime: string;
    content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // Match files like: post-name.en.md or post-name.fr.md
    const modules = import.meta.glob('../content/blog/*.*.md', { query: '?raw', import: 'default' });
    const posts: BlogPost[] = [];

    for (const path in modules) {
        const filename = path.split('/').pop() || '';
        // Extract language and slug from filename (e.g., "my-post.en.md" -> slug: "my-post", language: "en")
        const match = filename.match(/^(.+)\.([a-z]{2})\.md$/);
        if (!match) continue;

        const [, slug, language] = match;
        const content = await modules[path]() as string;
        const { attributes, body } = frontMatter<Omit<BlogPost, 'slug' | 'content' | 'language'>>(content);
        posts.push({
            slug,
            language,
            content: body,
            ...attributes,
        });
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostsByLanguage(language: string): Promise<BlogPost[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.language === language);
}

export async function getPostBySlug(slug: string, language: string): Promise<BlogPost | null> {
    const posts = await getAllPosts();
    return posts.find((post: BlogPost) => post.slug === slug && post.language === language) || null;
}
