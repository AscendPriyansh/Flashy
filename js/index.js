let getStartedBtn = document.querySelectorAll(".getstarted-btn");
let contactBtn = document.querySelector(".contact-btn");

getStartedBtn.forEach(button => {
    button.addEventListener("click" ,()=> {
        window.location.href = "./flashcard.html";
    });
});

contactBtn.addEventListener("click", ()=> {
    window.open("https://x.com/AscendEleven", "_blank");
});