import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/server', { recursive: true });

const html = await readFile('index.html', 'utf8');
const projectHtml = await readFile('project.html', 'utf8');
const physicsInformedHtml = await readFile('physics-informed.html', 'utf8');
const idealizedHtml = await readFile('idealized.html', 'utf8');
const deepfpcHtml = await readFile('deepfpc.html', 'utf8');
const newbornDomainAdaptationHtml = await readFile('newborn-domain-adaptation.html', 'utf8');
const spectroVitHtml = await readFile('spectro-vit.html', 'utf8');
const css = await readFile('styles.css', 'utf8');
const socialCard = (await readFile('og.png')).toString('base64');
const profilePhoto = (await readFile('profile.jpg')).toString('base64');
const projectImage = (await readFile('nifti-mrs.jpg')).toString('base64');
const physicsInformedImage = (await readFile('physics-informed-mrs.jpg')).toString('base64');
const idealizedImage = (await readFile('idealized-mrs.jpg')).toString('base64');
const deepfpcImage = (await readFile('deepfpc-mrs.jpg')).toString('base64');
const newbornDomainAdaptationImage = (await readFile('newborn-domain-adaptation.jpg')).toString('base64');
const spectroVitImage = (await readFile('spectro-vit.jpg')).toString('base64');

const worker = `
const html = ${JSON.stringify(html)};
const projectHtml = ${JSON.stringify(projectHtml)};
const physicsInformedHtml = ${JSON.stringify(physicsInformedHtml)};
const idealizedHtml = ${JSON.stringify(idealizedHtml)};
const deepfpcHtml = ${JSON.stringify(deepfpcHtml)};
const newbornDomainAdaptationHtml = ${JSON.stringify(newbornDomainAdaptationHtml)};
const spectroVitHtml = ${JSON.stringify(spectroVitHtml)};
const css = ${JSON.stringify(css)};
const socialCard = ${JSON.stringify(socialCard)};
const profilePhoto = ${JSON.stringify(profilePhoto)};
const projectImage = ${JSON.stringify(projectImage)};
const physicsInformedImage = ${JSON.stringify(physicsInformedImage)};
const idealizedImage = ${JSON.stringify(idealizedImage)};
const deepfpcImage = ${JSON.stringify(deepfpcImage)};
const newbornDomainAdaptationImage = ${JSON.stringify(newbornDomainAdaptationImage)};
const spectroVitImage = ${JSON.stringify(spectroVitImage)};

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

    if (pathname === '/physics-informed.html') {
      return new Response(physicsInformedHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/idealized.html') {
      return new Response(idealizedHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/deepfpc.html') {
      return new Response(deepfpcHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/newborn-domain-adaptation.html') {
      return new Response(newbornDomainAdaptationHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (pathname === '/spectro-vit.html') {
      return new Response(spectroVitHtml, { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } });
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

    if (pathname === '/nifti-mrs.jpg') {
      const bytes = Uint8Array.from(atob(projectImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/physics-informed-mrs.jpg') {
      const bytes = Uint8Array.from(atob(physicsInformedImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/idealized-mrs.jpg') {
      const bytes = Uint8Array.from(atob(idealizedImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/deepfpc-mrs.jpg') {
      const bytes = Uint8Array.from(atob(deepfpcImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/newborn-domain-adaptation.jpg') {
      const bytes = Uint8Array.from(atob(newbornDomainAdaptationImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    if (pathname === '/spectro-vit.jpg') {
      const bytes = Uint8Array.from(atob(spectroVitImage), character => character.charCodeAt(0));
      return new Response(bytes, { headers: { ...headers, 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=86400' } });
    }

    return new Response('404 // route_not_found', { status: 404, headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' } });
  }
};
`;

await writeFile('dist/server/index.js', worker);
