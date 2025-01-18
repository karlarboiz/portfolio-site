import { typingAnimation,typingAnimationRemoving } from "./main-section/main-section.js";
 
const section1 = document.querySelector(".section--1");
const targetTitleElement = document.querySelector(".main--header");


const options = {
    root: null,
    rootMargin: "500px",
    threshold: .5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {

        console.log(targetTitleElement.textContent)
        if(entry.isIntersecting) {
            typingAnimation(targetTitleElement);
        }else {
          targetTitleElement.textContent =""
        }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(section1)


  