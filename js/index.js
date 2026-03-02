let getStartedBtn = document.querySelector(".getstarted-btn");
let getStartedtop = document.querySelector(".getstarted");
let contactBtn = document.querySelector(".contact-btn");
let mobscreen = document.querySelector(".mobscreen-navbar");
let linksMob = document.querySelector(".links-mobscreen");

getStartedBtn.addEventListener("click", () => {
    window.location.href = "./flashcard.html";
});

getStartedtop.addEventListener("click", () => {
    window.location.href = "./flashcard.html";
});

contactBtn.addEventListener("click", () => {
    window.open("https://x.com/AscendEleven", "_blank");
});

mobscreen.addEventListener("click", ()=> {
    if(linksMob.style.display === "flex")
        linksMob.style.display = "none";
    else 
        linksMob.style.display = "flex";
});
