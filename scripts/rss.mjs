import { writeFileSync } from "fs";
import RSS from "rss";

import { allPosts } from "../.contentlayer/generated/index.mjs";

async function generate() {
  const feed = new RSS({
    title: "sabersol.com",
    site_url: "https://sabersol.com",
    feed_url: "https://sabersol.com/feed.xml",
    image_url: "https://sabersol.com/og.jpg",
    description:
      "Saber Soleymani is a visiting assistant professor at Georgia State University",
  });
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://sabersol.com/blog/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags,
    });
  });
  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
generate();
