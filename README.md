# LiveEmoji

LiveEmoji is a delightful collection of animated emoji icons designed for React applications. Bring your user interfaces to life with our vibrant and expressive emojis that seamlessly blend into your projects. With easy-to-use components and customizable options, LiveEmoji empowers developers to enhance their applications with a touch of fun and creativity.

## Installation

You can install LiveEmoji via npm:

```bash
npm install liveemoji

Usage

You can use the LiveEmoji component to display animated emojis dynamically. Here's an example of how to use it in your application:

javascript

import React from 'react';
import LiveEmoji from 'liveemoji';

const App = () => {
  return (
    <div>
      <h1>Welcome to LiveEmoji!</h1>
      <LiveEmoji icon="smile" className="emoji-class" size={32} />
    </div>
  );
};

export default App;

Props

The LiveEmoji component accepts the following props:
Prop	Type	Description
icon	string	The name of the emoji to display (e.g., "smile", "heart").
className	string	Optional custom class for styling the emoji.
size	number	Optional size of the emoji in pixels (default is 24).
Example

Here’s a complete example of how to use LiveEmoji:

javascript

import React from 'react';
import LiveEmoji from 'liveemoji';

const EmojiExample = () => {
  return (
    <div>
      <h2>Here are some emojis:</h2>
      <LiveEmoji icon="smile" size={32} />
      <LiveEmoji icon="heart" size={32} />
      <LiveEmoji icon="thumbs-up" size={32} />
    </div>
  );
};

export default EmojiExample;
