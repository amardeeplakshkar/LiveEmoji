"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { useRouter } from "next/navigation";

export function HeroParallaxDemo() {
  const router = useRouter();

  const navigateToGallery = () => {
    router.push("/Gallary");
  };

  return (
    <>
      <HeroParallax products={products} />
      <div className="grid my-10 place-items-center">
        <button onClick={navigateToGallery} className="p-2 mt-4 text-white bg-blue-500 rounded ">
          Go to Gallery
        </button>
      </div>

    </>
  );
}

export const products = [
  {
    id: 1,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo1.png",
  },
  {
    id: 2,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo2.png",
  },
  {
    id: 3,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo3.png",
  },

  {
    id: 4,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo4.png",
  },
  {
    id: 5,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo5.png",
  },
  {
    id: 6,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo3.png",
  },

  {
    id: 7,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo6.png",
  },
  {
    id: 8,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo1.png",
  },
  {
    id: 9,
    title: "LiveEmoji",
    link: "https://github.com/amardeeplakshkar/LiveEmoji",
    thumbnail:
      "https://raw.githubusercontent.com/amardeeplakshkar/LiveEmoji/refs/heads/main/public/Thumbnail/LiveEmojiRepo2.png",
  },
];

export default HeroParallaxDemo;