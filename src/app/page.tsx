"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from './HomePage.module.css';
import mostPopular from '../data/mostPopular'
import featurePosts from "@/data/featuredPosts";
import React from "react";


export default function Home() {

  const [popular, setPopular] = useState(mostPopular)
  const [featPost, setFeatPost] = useState(featurePosts)
  const [currentIndex, setCurrentIndex] = useState(0);

  const postsPerPage = 3;
  const totalPosts = featPost.length;

  const nextPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalPosts - postsPerPage + 1));
  };


  const prevPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPosts - postsPerPage : prevIndex - 1
    );
  };

  const visiblePosts = (() => {
    const start = currentIndex;
    const end = currentIndex + postsPerPage;

    const posts = [...featPost];
    if (end > totalPosts) {
      const loopedPosts = posts.slice(0, (end % totalPosts));
      return [...posts.slice(start), ...loopedPosts];
    }

    return posts.slice(start, end);
  })();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full">
          <div>
            <Image
              src="/images/hero.jpg"
              alt="Descubre el mundo"
              width={1600}
              height={400}
            />
            <h2 className="relative z-20 bottom-12 pl-5 text-xl font-bold text-white ">Descubre los mejores destinos para tus próximas vacaciones</h2>
          </div>
        </section>
        <section >
          <h3 className="font-bold text-xl pb-4">Los mejores destinos para viajar en 2025: ¿Cuál será el primero?</h3>
          <div className="container mx-auto px-4">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              {popular.map((destination) => (
                <Link href={destination.link} key={destination.id} className="p-4 rounded-lg bg-gray-100 hover:bg-blue-200 hover:scale-105 transition-transform duration-300">
                  {destination.pais}
                </Link>
              ))}
            </div>
          </div>

        </section>
        <section className="relative max-w-full mx-auto overflow-hidden">
          <button
            onClick={prevPost}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
          >
            &#10094;
          </button>
          <div className="flex transition-transform duration-300 py-2 mr-6 ml-8">
            {visiblePosts.map((post, index) => (
              <div key={post.id} className="max-w-sm flex-shrink-0 rounded overflow-hidden shadow-lg mr-4">
                <Image
                  src={post.image}
                  alt={`${post.pais}, ${post.ciudad}`}
                  width={1500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">{post.pais}, {post.ciudad}</h2>
                  <p className="text-gray-700 text-base">{post.description}</p>
                </div>
                <ul className="px-6 pt-4 pb-2">
                  {post.places.map((place, index) => (
                    <li key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button
            onClick={nextPost}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
          >
            &#10095;
          </button>
        </section>
        <section className={styles.lastPost}>
          {/* Last posts */}
        </section>
        <section className={styles.about}>
          {/* About section */}
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
