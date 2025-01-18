import { typingAnimation,typingAnimationRemoving } from "./main-section/main-section.js";
 
const section1 = document.querySelector(".section--1");
const targetTitleElement = document.querySelector(".main--header");


const options = {
    root: null,
    rootMargin: "250px",
    threshold: .5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            typingAnimation(targetTitleElement);
        }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(section1)


  