const questions = [
    // {
    //     question: "What does HTML stand for?",
    //     answers: [
    //         { text: "a) Hyper Transfer Markup Language" , correct: false},
    //         { text: "b) Hyper link Makeup Language" , correct: false},
    //         { text: "c) Hyperlink and Text Markup Language" , correct: false},
    //         { text: "d) Hyper Text Markup Language" , correct: true},
    //     ]
    // },
    // {
    //     question: "Which HTML tag is used to create a hyperlink?",
    //     answers: [
    //         { text: "a) link" , correct: false},
    //         { text: "b) a" , correct: true},
    //         { text: "c) href" , correct: false},
    //         { text: "b) url" , correct: false},
    //     ]
    // },
    // {
    //     question: "Which HTML tag is used to define the structure of an HTML document, such as headings and paragraphs",
    //     answers: [
    //         { text: "a) content" , correct:false},
    //         { text: "b) body" , correct: true},
    //         { text: "c) structure" , correct: false},
    //         { text: "d) head" , correct: false},
    //     ]
    // },
    // {
    //     question: "What is the correct HTML element for inserting a line break",
    //     answers: [
    //         { text: "a) lb" , correct: false},
    //         { text: "b) linebreak" , correct: false},
    //         { text: "c) break" , correct: false},
    //         { text: "d) br" , correct: true},
    //     ]
    // },
    // {
    //     question: "Which HTML tag is used to create an ordered list?",
    //     answers: [
    //         { text: "a) ul" , correct: false},
    //         { text: "b) li" , correct: false},
    //         { text: "c) ol" , correct: true},
    //         { text: "d) dl" , correct: false},
    //     ]
    // },
    // {
    //     question: "What is the purpose of the HTML <meta> tag?",
    //     answers: [
    //         { text: "a) To create metadata for search engines" , correct: true},
    //         { text: "b) To display images on the page" , correct: false},
    //         { text: "c) To define the document's structure" , correct: false},
    //         { text: "d) To insert JavaScript code" , correct: false},
    //     ]
    // },
    // {
    //     question: "Which attribute is used in HTML to specify the source URL of an image?",
    //     answers: [
    //         { text: "a) imagesrc" , correct: false},
    //         { text: "b) link" , correct: false},
    //         { text: "c) href" , correct: false},
    //         { text: "d) src" , correct: true},
    //     ]
    // },
    {
        question: "What is the HTML tag used to create a table?",
        answers: [
            { text: "a) table", correct: true },
            { text: "b) grid", correct: false },
            { text: "c) tabular", correct: false },
            { text: "d) tgrid", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define a hyperlink within the same page?",
        answers: [
            { text: "a) link", correct: false },
            { text: "b) anchor", correct: false },
            { text: "c) a", correct: true },
            { text: "d) href", correct: false },
        ]
    },
    {
        question: "In HTML, which tag is used to define the header for a section or subsection?",
        answers: [
            { text: "a) title", correct: false },
            { text: "b) header", correct: false },
            { text: "c) head", correct: true },
            { text: "d) top", correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    selectedBtn.classList.add("selected")
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        (score++);
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add();
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};
// const h5 = document.createElement('h5')

function showScore() {
    resetState();
    // questionElement.innerHTML = `your score ${score * 10}% out of ${100}%`
    questionElement.innerText = score >= 2 ? 'You Passed !' : 'You Failed !'
    questionElement.innerHTML = 'your score' + ' ' + score * 10 + '%' + ' ' + 'out of 100%'
};

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();