"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function InstagramReel({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <>
      <div ref={containerRef} className="w-full max-w-[350px] bg-zinc-900 rounded-[24px] overflow-hidden shadow-2xl relative min-h-[500px]">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          data-instgrm-theme="dark"
          style={{
            background: "#000",
            border: "0",
            borderRadius: "24px",
            margin: "0",
            padding: "0",
            width: "100%",
          }}
        ></blockquote>
      </div>
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />
    </>
  );
}
