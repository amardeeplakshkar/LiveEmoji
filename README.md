
# LiveEmoji


![LiveEmoji](https://github.com/amardeeplakshkar/LiveEmoji/blob/main/public/LiveEmojiPoster.png?raw=true)


LiveEmoji is a delightful collection of animated emoji icons designed for React applications. Bring your user interfaces to life with our vibrant and expressive emojis that seamlessly blend into your projects. With easy-to-use components and customizable options, LiveEmoji empowers developers to enhance their applications with a touch of fun and creativity.



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://amardeep-portfolio.vercel.app/) [![npm](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/amardeep-lakshkar-24a339244) [![npm version](https://img.shields.io/npm/v/liveemoji.svg?style=flat-square)](https://www.npmjs.com/package/liveemoji)



## Features

- **Animated emojis**: A curated selection of animated emoji icons
- **Responsive and customizable**: Easily adjust emoji size and apply custom styling
- **Optimized for performance**: Smooth animations that perform beautifully across devices
- **Easy to use**: Import and display emojis with simple, intuitive components
- **TypeScript support**: For robust typing and better developer experience



## Installation

You can install LiveEmoji via npm:

```bash
npm install liveemoji
```
    
## Usage

You can use the LiveEmoji component to display animated emojis dynamically. Here's an example of how to use it in your application:

```javascript
import { LiveEmoji } from 'liveemoji';
```
```javascript
<LiveEmoji icon="ConfusedFace" size={'32'} />
<LiveEmoji icon="ClownFace" size={"32"} />
<LiveEmoji icon="FaceWithPeekingEye" size={"32"} />
```
## Props

The `LiveEmoji` component accepts the following props:

| Prop       | Type    | Description                                                      |
|------------|---------|------------------------------------------------------------------|
| `icon`     | string  | The name of the emoji to display in `PascelCase` only (e.g., "DizzyFace", "ClownFace").     |
| `className`| string  | Optional custom class or TailwindCSS for styling the emoji.                    |
| `size`     | string  | Optional size of the emoji in pixels (default is 24).          |

## Example

Here’s a complete example of how to use `LiveEmoji`:

```javascript
import React from 'react';
import { LiveEmoji } from 'liveemoji';

const EmojiExample = () => {
  return (
    <div>
      <h2>Here are some emojis:</h2>
      <LiveEmoji icon="ConfusedFace" size={"32"} />
      <LiveEmoji icon="ClownFace" size={"32"} />
      <LiveEmoji icon="FaceWithPeekingEye" size={"32"} />
    </div>
  );
};

export default EmojiExample;

```


