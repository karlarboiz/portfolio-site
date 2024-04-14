function clipboardFuncHandler(val) {
    let target = val.target.closest("svg[data-icon='clipboard-svg'");
    if(!target) return;
    
    const targetRefer = target.dataset.refer;
    if(targetRefer.trim().toLowerCase() !== "resume") {
        const targetBox = document.querySelector(`.common-highlight[data-content="${targetRefer}"]`);
        navigatorClipboard(targetBox.textContent);
    }else {
        const targetBox = document.querySelector(`.common-highlight[data-content="${targetRefer}"]`);

        navigatorClipboard(targetBox.getAttribute("href"));
    }
}

async function navigatorClipboard(val){
    console.log(val)
    try{
        await navigator.clipboard.writeText(val);

        const notificationEl = document.createElement("div");

        notificationEl.className= "notification";
        notificationEl.textContent = "Text Copied in the Clipboard";
        document.querySelector("body").appendChild(notificationEl);

        removeNotification(notificationEl);
    }catch(e){
        console.log(e)
    }
    
}

function removeNotification(el) {
    setTimeout(() => {
        el.remove();
    }, 1000);
}

export {clipboardFuncHandler};