"use client";

import { InstagramEmbed } from 'react-social-media-embed';
import { useState, useEffect } from 'react';

export default function InstagramReel({ url }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-[500px] max-w-[328px] mx-auto bg-zinc-900 animate-pulse rounded-xl"></div>;
  }

  return <InstagramEmbed url={url} width="100%" />;
}
