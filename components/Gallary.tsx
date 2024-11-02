'use client'
import React, { useState } from 'react';
import { LiveEmoji } from 'liveemoji';
import { emojiData } from './emojiData';
import { FaCopy } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

const Gallery = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<LiveEmoji icon={${name}} size={"40"} />`);
    toast.dark(`${name} copied!`, { theme: 'dark' });
  };

  const handleCommandCopy = () => {
    navigator.clipboard.writeText(`npm install liveemoji@latest`);
    toast.dark(`Command copied!`, { theme: 'dark' });
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  const filteredEmojis = Object.entries(emojiData).filter(([name]) =>
    name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-4">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className='mb-8 text-center'>
        <span className='p-4 font-bold rounded-lg bg-zinc-500/10'>
          npm i liveemoji
          <button
            className="p-2 ml-2 text-sm text-white rounded bg-zinc-600/10 hover:bg-zinc-500/10"
            onClick={handleCommandCopy}
          >
            <FaCopy />
          </button>
        </span>
      </div>

      {/* Use the PlaceholdersAndVanishInput for the search functionality */}
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}  // Update search term on change
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Search submitted");
        }}
      />

      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredEmojis.slice(0, visibleCount).map(([name, iconUrl]) => (
          <div key={name} className="flex flex-col items-center p-2 border rounded-lg shadow-sm emoji-card">
            <LiveEmoji icon={name as keyof typeof emojiData} size={"2.5em"} />
            <span className="mt-2 font-semibold">
              {name.length > 12 ? `${name.slice(0, 12)}...` : name}
            </span>
            <button
              className="px-2 py-1 mt-2 text-sm text-white rounded bg-zinc-600/10 hover:bg-zinc-500/10"
              onClick={() => handleCopy(name)}
            >
              <FaCopy />
            </button>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center w-full'>
        {visibleCount < filteredEmojis.length && (
          <button
            className="px-4 py-2 mt-4 text-white rounded-md bg-zinc-600/10 hover:bg-zinc-500/10"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
