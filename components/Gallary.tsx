// Gallery.tsx
import React from 'react';
import {LiveEmoji} from 'liveemoji';
import { emojiData } from './emojiData';

const Gallery = () => {
  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    alert(`${name} copied!`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {Object.entries(emojiData).map(([name, iconUrl]) => (
        <div key={name} className="flex flex-col items-center p-2 border rounded-lg shadow-sm emoji-card">
              <LiveEmoji icon={name as keyof typeof emojiData} size={40} />
          <span className="mt-2 font-semibold">{name}</span>
          <button
            className="px-2 py-1 mt-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => handleCopy(name)}
          >
            Copy Name
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
