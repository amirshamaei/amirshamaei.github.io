import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/server', { recursive: true });

const html = await readFile('index.html', 'utf8');
const projectHtml = await readFile('project.html', 'utf8');
const css = await readFile('styles.css', 'utf8');
const socialCard = (await readFile('og.png')).toString('base64');
const profilePhoto = (await readFile('profile.jpg')).toString('base64');
const projectImage = (await readFile('nifti-mrs.png')).toString('base64');

const worker = `
const html = ${JSON.stringify(html)};
const projectHtml = ${JSON.stringify(projectHtml)};
const css = ${JSON.stringify(css)};
const socialCard = ${JSON.stringify(socialCard)};
const profilePhoto = ${JSON.stringify(profilePhoto)};
const projectImage = ${JSON.stringify(projectImage)};

const headers = {
  'Cache-Control': 'public, max-age=300',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY'
};

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === '/' || pathname === '/index.html') {
      return new Response(html, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/project.html') {
      return new Response(projectHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/styles.css') {
      return new Response(css, { headers: { ...headers, 'Content-Type': 'text/css; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
    }

    if (pathname === '/og.png') {
      const bytes = Uint8Array.from(atob(socialCard), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/profile.jpg') {
      const bytes = Uint8Array.from(atob(profilePhoto), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/nifti-mrs.png') {
      const bytes = Uint8Array.from(atob(projectImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' } });
    }

    return new Response('404 // route_not_found', { status: 404, headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' } });
  }
};
`;

await writeFile('dist/server/index.js', worker);
