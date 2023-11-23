const quizes = [
    {
        que: '1. What does HTML stand for ?',
        options: ['a) Hyper Transfer Markup Language',
            'b) Hyper Text Markup Language',
            'c) High Tech Markup Language',
            'd) Hyperlink and Text Markup, Language'],
        correct: 'b) Hyper Text Markup Language'
    },
    {
        que: '2. Which HTML tag is used for creating an ordered list ?',
        options: ['a) <ul>', 'b) <li>', 'c) <ol>', 'd) <dl>'],
        correct: 'c) <ol>'
    },
    {
        que: '3. What is the correct HTML tag for inserting a line break ?',
        options: ['a) <br>', 'b) <lb>', 'c) <linebreak>', 'd) <newline>'],
        correct: 'a) <br>'
    },
    {
        que: '4. What HTML tag is used to define an external JavaScript file ?',
        options: ['a) <script>', 'b) <js>', 'c) <javascript>', 'd) <link>'],
        correct: 'd) <link>'
    },
    {
        que: '5. Which HTML tag is used for creating a hyperlink ?',
        options: ['a) <a>', 'b) <href>', 'c) <url>' , 'd) <link>'],
        correct: 'a) <a>'
    },
    {
        que: '6. What is the purpose of the HTML <head> element ?',
        options: ['a) To define the main content of the web page.',
            'b) To specify the layout of the page.',
            'c) To contain metadata about the document.',
            'd) To create visible content on the page.'],
        correct: 'c) To contain metadata about the document.'
    },
    {
        que: '7. Which attribute is used to define the alternate text for an image in HTML ?',
        options: ['a) alt', 'b) title', 'c) description', 'd)image-text'],
        correct: 'a) alt'
    },
    {
        que: '8. Which HTML tag is used to create a horizontal line on a webpage ?',
        options: ['a) <line>', 'b) <horizental>', 'c) <hr>', 'd) break'],
        correct: 'c) <hr>'
    },
    {
        que: '9. What does CSS stand for in the context of web development ?',
        options: ['a) Computer Style Sheets',
            'b) Colorful Style Sheets',
            'c) Cascading Style Sheets',
            'd) Creative Style Sheets'],
        correct: 'c) Cascading Style Sheets'
    },
    {
        que: '10. Which HTML tag is used to define the structure of an HTML document, including the title and charset?',
        options: ['a) <html>', 'b) <structure>', 'c) <document>', 'd) <meta>'],
        correct: 'a) <html>'
    }
]

let currentQuestion = 0
let rightAnswers = 0
let wrongAnswers = 0
let userAnswer = undefined

const quizContainer = document.getElementById('quizContainer')
const resultContainer = document.getElementById('resultContainer')
const nextBtn = document.getElementById('next-btn')

const showQuestion = () => {
    quizContainer.innerHTML = null
    let queDiv = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = quizes[currentQuestion].que
    h3.className = 'quiz-question'
    queDiv.appendChild(h3)
    quizes[currentQuestion].options.map(data => {
        let optionDiv = document.createElement('div')
        let input = document.createElement('input')
        let span = document.createElement('span')
        input.type = 'radio'
        input.name = 'quiz-option'
        input.value = data
        span.innerText = data
        input.addEventListener('change', function () {
            console.log(this.value)
            userAnswer = this.value
            nextBtn.disabled = false
        })
        optionDiv.appendChild(input)
        optionDiv.appendChild(span)
        optionDiv.className = 'quiz-option'
        queDiv.appendChild(optionDiv)
    })

    quizContainer.appendChild(queDiv)
}

function checkValue() {
    console.log(this)
}

showQuestion()

nextBtn.addEventListener('click', showNextQuestionn)

function showNextQuestionn() {
    const question = quizes[currentQuestion]
    if (userAnswer === question.correct) {
        rightAnswers++
    } else {
        wrongAnswers++
    }

    if (currentQuestion + 1 < quizes.length) {
        currentQuestion++
    } else if (currentQuestion + 1 === quizes.length) {
        resultContainer.style.display = 'block'
        showResult()
        quizContainer.style.display = 'none'
        nextBtn.style.display = 'none'
    }

    nextBtn.disabled = true

    showQuestion()
}

function showResult() {
    resultContainer.innerHTML = null
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.innerText = rightAnswers > wrongAnswers ? 'You Passed !' : 'You Failed !'
    const rightH3 = document.createElement('h3')
    rightH3.innerText = 'Right Answers ' + rightAnswers
    rightH3.className = 'right'
    const score = document.createElement('h3')
    score.innerText = 'Score ' + rightAnswers * 10 +'%'
    score.className = 'score'
    const wrongH3 = document.createElement('h3')
    wrongH3.innerText = 'Wrong Answers ' + wrongAnswers
    wrongH3.className = 'wrong'

    div.appendChild(h1)
    div.appendChild(rightH3)
    div.appendChild(score)
    div.appendChild(wrongH3)

    resultContainer.appendChild(div)
}