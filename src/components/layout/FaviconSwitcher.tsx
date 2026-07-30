'use client';

import { useEffect } from 'react';

export default function FaviconSwitcher() {
  useEffect(() => {
    const updateFavicon = (e: MediaQueryListEvent | MediaQueryList) => {
      const isDark = e.matches;
      const faviconHref = isDark ? '/archiodesigns-dark.png' : '/archiodesigns.png';

      // Find or create rel="icon" links
      let iconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (iconLink) {
        iconLink.href = faviconHref;
      } else {
        iconLink = document.createElement('link');
        iconLink.rel = 'icon';
        iconLink.href = faviconHref;
        document.head.appendChild(iconLink);
      }

      // Find or create rel="shortcut icon" links
      let shortcutLink = document.querySelector<HTMLLinkElement>("link[rel='shortcut icon']");
      if (shortcutLink) {
        shortcutLink.href = faviconHref;
      }

      // Find or create rel="apple-touch-icon" links
      let appleLink = document.querySelector<HTMLLinkElement>("link[rel='apple-touch-icon']");
      if (appleLink) {
        appleLink.href = faviconHref;
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(mediaQuery);

    try {
      mediaQuery.addEventListener('change', updateFavicon);
    } catch {
      // Fallback for older browsers
      mediaQuery.addListener(updateFavicon);
    }

    return () => {
      try {
        mediaQuery.removeEventListener('change', updateFavicon);
      } catch {
        mediaQuery.removeListener(updateFavicon);
      }
    };
  }, []);

  return null;
}
