import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const CTA_URL = 'https://app.quotemyfence.com.au/#/step/1';

// Track prefetched URLs to avoid duplicates
const prefetchedUrls = new Set<string>();

export const usePrefetch = () => {
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Prefetch a URL
  const prefetchUrl = useCallback((url: string) => {
    if (prefetchedUrls.has(url)) return;

    // Only prefetch internal routes
    if (url.startsWith('/') && !url.startsWith('//')) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'document';
      document.head.appendChild(link);
      prefetchedUrls.add(url);
    }
  }, []);

  // Prefetch an image
  const prefetchImage = useCallback((src: string) => {
    if (prefetchedUrls.has(src)) return;

    const img = new Image();
    img.src = src;
    prefetchedUrls.add(src);
  }, []);

  // Preload CTA URL (highest priority)
  useEffect(() => {
    // Preload the CTA bundle
    const preloadCTA = () => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = 'https://app.quotemyfence.com.au';
      document.head.appendChild(link);

      // DNS prefetch
      const dns = document.createElement('link');
      dns.rel = 'dns-prefetch';
      dns.href = 'https://app.quotemyfence.com.au';
      document.head.appendChild(dns);
    };

    preloadCTA();
  }, []);

  // Set up intersection observer for viewport-based prefetching
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
              prefetchUrl(href);
            }
          }
        });
      },
      {
        rootMargin: '100px', // Start prefetching slightly before visible
      }
    );

    // Observe all internal links
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      observerRef.current?.observe(link);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [location.pathname, prefetchUrl]);

  // Hover-based prefetching for instant feel
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      // Guard: ensure target is an Element before calling closest
      if (!(target instanceof Element)) return;

      const link = target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          prefetchUrl(href);
        }
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, [prefetchUrl]);

  // Prefetch current page images
  useEffect(() => {
    const images = document.querySelectorAll('img[src]');
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src) {
        prefetchImage(src);
      }
    });
  }, [location.pathname, prefetchImage]);

  return { prefetchUrl, prefetchImage };
};

export default usePrefetch;
