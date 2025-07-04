"use client";

import { useEffect } from "react";
import WeddingTitle from "~/app/components/weddingTitle";

// Declare Tally global type
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function Page() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      // Fallback: manually load embeds if script fails
      const iframes = document.querySelectorAll("iframe[data-tally-src]:not([src])");
      iframes.forEach((iframe) => {
        const src = iframe.getAttribute("data-tally-src");
        if (src) {
          iframe.setAttribute("src", src);
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full h-full max-w-4xl mx-auto mb-16 md:mb-2">
      {/* Mobile wedding title - only visible on mobile */}
      <WeddingTitle />
      <iframe data-tally-src="https://tally.so/embed/nGV6xp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height={600} frameBorder="0" marginHeight={0} marginWidth={0} title="RSVP to Bekah & Sam's Wedding in New York" className="w-full px-4" />

    </div>
  );
}
