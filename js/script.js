const topics = {
    "Formula 1": [
        {
            question: "What is a Grand Prix?",
            answer: "A major Formula 1 race event."
        },
        {
            question: "What is DRS?",
            answer: "Drag Reduction System used to reduce aerodynamic drag."
        },
        {
            question: "What is a Pit Stop?",
            answer: "A stop during the race for tire change or adjustments."
        },
    ],
    "JavaScript": [
        {
            question: "What is a variable?",
            answer: "A container used to store data."
        },
        {
            question: "What is a function?",
            answer: "A reusable block of code."
        },
        {
            question: "What is an array?",
            answer: "A collection of multiple values in a single variable."
        }
    ],
}

let activeTopic = "Formula 1";
let currentIndex = 0;
let showingAnswer = false;

let content = document.querySelector(".flashcard .heading");
let arrowRightMob = document.querySelector(".arrow-right1");
let arrowRight = document.querySelector(".arrow-right2");
let arrowLeft = document.querySelector(".arrow-left");
let showAnswerBtn = document.querySelector(".showanswer");
let count = document.querySelector(".count");
let topic = document.querySelector(".topic");
let cards = document.querySelector(".cards");

function updateCard() {
    const currentCards = topics[activeTopic];

    cards.classList.add("cards-animation-next");

    setTimeout(()=> {
        cards.classList.remove("cards-animation-next");
    }, 1000);

    topic.textContent = activeTopic;
    content.textContent = currentCards[currentIndex].question;
    count.textContent = `${currentIndex + 1}/${currentCards.length}`;

    showingAnswer = false;
    showAnswerBtn.textContent = "Show Answer";
}

function navigate(direction) {
    const currentCards = topics[activeTopic];

    if(direction===1 && currentIndex===currentCards.length-1) {
        return;
    }
    if(direction===-1 && currentIndex===0) {
        return;
    }

    if (direction === 1 && currentIndex < currentCards.length - 1) {
        currentIndex++;
    }

    if (direction === -1 && currentIndex > 0) {
        currentIndex--;
    }

    updateCard();
}

function resultFun(details) {
    const currentCards = topics[activeTopic];

    cards.classList.add("cards-animation-result");

    setTimeout(() => {
        cards.classList.remove("cards-animation-result");
    }, 1000);

    if(details===-1) {
        content.textContent = currentCards[currentIndex].answer;
        showingAnswer=true;
        showAnswerBtn.textContent = "Show Question";
    }
    else {
        content.textContent = currentCards[currentIndex].question;
        showingAnswer=false;
        showAnswerBtn.textContent = "Show Answer";
    } 
}

if(window.innerWidth<=768) {
    arrowRightMob.addEventListener("click", () => {
    navigate(1);
    });
}
else {
    arrowRight.addEventListener("click", () => {
        navigate(1);
    });
}

arrowLeft.addEventListener("click", () => {
    navigate(-1);
});

updateCard();

showAnswerBtn.addEventListener("click", (dets)=> {
    if(showingAnswer===false) {
        resultFun(-1);
    }
    else {
        resultFun(1);
    }
});
