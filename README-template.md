# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

```css
.advice__btn {
  position: absolute;
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);

  border: none;
  background-color: var(--primary-neon);
  display: inline-block;
  line-height: 0;
  padding: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

.advice__btn:hover {
  box-shadow: 0 0 4rem var(--primary-neon);
}
```

```js
useEffect(() => {
  axios({ method: "get", url: "https://api.adviceslip.com/advice" })
    .then((response) => {
      setshowLoading(true);
      setAdvice(response.data.slip);
    })
    .finally(() => {
      setshowLoading(false);
    });
}, [showLoading]);

useEffect(() => {
  window.addEventListener("resize", detectWidth);

  return () => {
    window.removeEventListener("resize", detectWidth);
  };
}, [width]);
```
### Continued development

I want to master flexbox in the future project as it is a useful tool to style the layout. My vision is to fully utilise the benefits of CSS grid and Flexbox in my future projects.

## Author

- Frontend Mentor - [@harrytoh1114](https://www.frontendmentor.io/profile/harrytoh1114)
