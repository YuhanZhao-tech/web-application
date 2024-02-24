
const header = document.getElementsByTagName("header")[0];
const body = document.getElementsByTagName("body")[0];

function randomNum(min, max) {
    return ((max - min) * Math.random() + min);
}


function renderBackdrop() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    
    for (i = 0; i < 5; i++) {
        const item = document.createElement("div");
        item.classList.add("back-element");
        item.setAttribute("id", `element${i}`);
        body.insertBefore(item, header);
    }

    
}