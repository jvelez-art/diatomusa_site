import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const legalDirectory = path.join(process.cwd(), 'data/legal');

export function getLegalPostSlugs() {
  if (!fs.existsSync(legalDirectory)) {
    return [];
  }
  return fs.readdirSync(legalDirectory);
}

export function getLegalPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(legalDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  }

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllLegalPosts(fields: string[] = []) {
  const slugs = getLegalPostSlugs();
  const posts = slugs
    .map((slug) => getLegalPostBySlug(slug, fields))
    // sort posts by date in descending order if needed, but legal docs usually no need
    
  return posts;
}
