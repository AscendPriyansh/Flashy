const topics = {
    "Formula 1": [
        { question: "What is a Grand Prix?", answer: "A major Formula 1 race event." },
        { question: "What is DRS?", answer: "Drag Reduction System used to reduce aerodynamic drag." },
        { question: "What is a Pit Stop?", answer: "A stop during the race for tire change or adjustments." },
        { question: "What flag indicates race stop?", answer: "Red flag." },
        { question: "How many teams are there in F1 (approx)?", answer: "10 teams." },
        { question: "What is Pole Position?", answer: "Starting first on the grid." },
        { question: "What does FIA stand for?", answer: "Fédération Internationale de l'Automobile." },
        { question: "What is a Constructor in F1?", answer: "The team that builds the car." },
        { question: "What tire types are used in dry races?", answer: "Soft, Medium, and Hard." },
        { question: "How many points does race winner get?", answer: "25 points." }
    ],

    "JavaScript": [
        { question: "What is a variable?", answer: "A container used to store data." },
        { question: "What is a function?", answer: "A reusable block of code." },
        { question: "What is an array?", answer: "A collection of multiple values in a single variable." },
        { question: "What keyword declares a block-scoped variable?", answer: "let or const." },
        { question: "How do you print in console?", answer: "console.log()" },
        { question: "What is a loop?", answer: "A way to repeat code multiple times." },
        { question: "What is an object?", answer: "A collection of key-value pairs." },
        { question: "What does DOM stand for?", answer: "Document Object Model." },
        { question: "What is an event?", answer: "An action like click or keypress." },
        { question: "What does JSON stand for?", answer: "JavaScript Object Notation." }
    ],

    "HTML": [
        { question: "What does HTML stand for?", answer: "HyperText Markup Language." },
        { question: "Which tag creates a hyperlink?", answer: "<a>" },
        { question: "Which tag inserts an image?", answer: "<img>" },
        { question: "Which tag creates a paragraph?", answer: "<p>" },
        { question: "Which tag is for the largest heading?", answer: "<h1>" },
        { question: "Which attribute is used for image source?", answer: "src" },
        { question: "Which tag creates an unordered list?", answer: "<ul>" },
        { question: "Which tag creates a table row?", answer: "<tr>" },
        { question: "Which tag is used for line break?", answer: "<br>" },
        { question: "What is the purpose of <head> tag?", answer: "Contains metadata and links to styles/scripts." }
    ],

    "CSS": [
        { question: "What does CSS stand for?", answer: "Cascading Style Sheets." },
        { question: "Which property changes text color?", answer: "color" },
        { question: "Which property changes background color?", answer: "background-color" },
        { question: "How do you select an element by ID?", answer: "#idName" },
        { question: "How do you select an element by class?", answer: ".className" },
        { question: "Which property adds space inside element?", answer: "padding" },
        { question: "Which property adds space outside element?", answer: "margin" },
        { question: "Which property is used for Flexbox?", answer: "display: flex" },
        { question: "Which property controls text size?", answer: "font-size" },
        { question: "Which property controls positioning?", answer: "position" }
    ],

    "Mathematics": [
        { question: "What is 7 × 8?", answer: "56" },
        { question: "What is the square root of 64?", answer: "8" },
        { question: "Value of π (approx)?", answer: "3.14" },
        { question: "What is 15% of 200?", answer: "30" },
        { question: "What is 9²?", answer: "81" },
        { question: "What is 100 ÷ 4?", answer: "25" },
        { question: "What is 12 + 35?", answer: "47" },
        { question: "What is 50 − 18?", answer: "32" },
        { question: "Area formula of circle?", answer: "πr²" },
        { question: "What is 2³?", answer: "8" }
    ],

    "General Knowledge": [
        { question: "What is the capital of India?", answer: "New Delhi." },
        { question: "Largest planet in our solar system?", answer: "Jupiter." },
        { question: "How many continents are there?", answer: "7" },
        { question: "National animal of India?", answer: "Tiger." },
        { question: "Largest ocean in the world?", answer: "Pacific Ocean." },
        { question: "What is H2O?", answer: "Water." },
        { question: "Who invented the light bulb?", answer: "Thomas Edison." },
        { question: "Currency of Japan?", answer: "Yen." },
        { question: "Speed of light?", answer: "3 × 10^8 m/s" },
        { question: "Who wrote the Indian National Anthem?", answer: "Rabindranath Tagore." }
    ]
};

let activeTopic = null;
let currentIndex = 0;
let showingAnswer = false;

let content = document.querySelector(".flashcard .heading");
let arrowRightMob = document.querySelector(".arrow-right1");
let arrowRight = document.querySelector(".arrow-right2");
let arrowLeft = document.querySelector(".arrow-left");
let showAnswerBtn = document.querySelector(".showanswer");
let count = document.querySelector(".count");
let topic = document.querySelector(".topic");
let topicsList = document.querySelector(".topics-list")
let cards = document.querySelector(".cards");
let listTopics = document.querySelectorAll(".topics-list ul li");

topic.addEventListener("click", () => {
    topicsList.style.display =
topicsList.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (e) => {
    if (!e.target.closest(".topic-wrapper")) {
        topicsList.style.display = "none";
    }
});

listTopics.forEach(list => {
    list.addEventListener("click", ()=> {
        topic.textContent = list.textContent;
        activeTopic = list.textContent;
        currentIndex = 0;
        updateCard();
    });
});


function updateCard() {
    if(!activeTopic) {
        content.textContent = "Please select topic from bottom.";
        count.textContent = "...";
        showAnswerBtn.style.display = "none";
        return;
    }

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
    showAnswerBtn.style.display = "flex";
}

function navigate(direction) {
    if(!activeTopic) {
        return;
    }

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

showAnswerBtn.addEventListener("click", (dets)=> {
    if(showingAnswer===false) {
        resultFun(-1);
    }
    else {
        resultFun(1);
    }
});

updateCard();