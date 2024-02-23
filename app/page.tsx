import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { LearningBanner } from "@/components/learning-banner";
import { Header } from "@/components/header";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-screen container py-12 md:py-24">
      <Header />
      <LearningBanner />
      <div className="prose dark:prose-invert max-w-5xl container py-2 ">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
