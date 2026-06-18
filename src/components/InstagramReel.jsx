"use client";

import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramReel({ url }) {
  return <InstagramEmbed url={url} width="100%" />;
}
