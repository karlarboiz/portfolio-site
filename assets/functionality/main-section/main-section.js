

let isTyping = false; // Global variable to track animation state

export function typingAnimation(element, speed = 100) {
    const titleText = "Software Developer";
    let i = 0;

    if (isTyping) return; // Prevent starting the animation again if it's already in progress

    isTyping = true;
    element.innerHTML = ""; // Clear the content before starting

    function type() {
        if (i < titleText.length) {
            element.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            isTyping = false; // Reset the typing state after completing
        }
    }

    type();
}

export function typingAnimationRemoving(element, speed = 100) {
    const titleText = element.textContent;
    let i = titleText.length;

    function remove() {
        if (i > 0) {
            element.innerHTML = titleText.slice(0, -1);
            i--;
            setTimeout(remove, speed);
        }else {
            isTyping = false;
        }
    }

    remove();
}

