import { getLegalPostBySlug, getAllLegalPosts } from '../../../lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';

export default async function LegalPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    
    // Check if valid slug for security or just try to get it
    let post;
    try {
        post = getLegalPostBySlug(slug, ['title', 'date', 'slug', 'content']);
    } catch (e) {
        return <div className="container mx-auto py-20 text-center">Document not found</div>;
    }

    // Title mapping based on filename if frontmatter is missing titles
    const titleMap: {[key: string]: string} = {
        'privacy_policy': 'Política de Privacidad',
        'legal_notice': 'Aviso Legal',
        'cookies_policy': 'Política de Cookies'
    };

    const title = titleMap[slug] || 'Legal';

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <main>
                   <article className="mx-auto">
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({node, ...props}) => <h1 className="font-serif text-3xl font-bold text-ink-900 mt-10 mb-6" style={{ fontFamily: 'var(--font-playfair)' }} {...props} />,
                                h2: ({node, ...props}) => <h2 className="font-serif text-2xl font-bold text-ink-900 mt-8 mb-4 border-b border-mist-160/40 pb-2" style={{ fontFamily: 'var(--font-playfair)' }} {...props} />,
                                h3: ({node, ...props}) => <h3 className="font-serif text-xl font-bold text-ink-900 mt-6 mb-3" style={{ fontFamily: 'var(--font-playfair)' }} {...props} />,
                                p: ({node, ...props}) => <p className="text-ink-700 leading-relaxed mb-4 text-base" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-ink-700 space-y-2" {...props} />,
                                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-ink-700 space-y-2" {...props} />,
                                li: ({node, ...props}) => <li className="pl-1" {...props} />,
                                a: ({node, ...props}) => <a className="text-rose-260 font-medium transition-colors hover:text-rose-220 underline decoration-rose-260/30 underline-offset-4 hover:decoration-rose-220" {...props} />,
                                strong: ({node, ...props}) => <strong className="font-bold text-ink-900" {...props} />,
                                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-rose-220 pl-4 py-1 italic text-ink-600 my-6 bg-mist-40/50 rounded-r-lg" {...props} />,
                                hr: ({node, ...props}) => <hr className="my-8 border-mist-160/60" {...props} />,
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </article>
                </main>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllLegalPosts(['slug']);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
