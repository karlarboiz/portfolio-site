

export function typingAnimation(element,speed=100){
    const titleText = "Software Developer";
    let i = 0;

   function type(){
    if (i < titleText.length) {
        element.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(type, speed);
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
        }
    }

    remove();
}

