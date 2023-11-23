//QUESTION NO 1
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
currentDateElement = document.getElementById('currentDate');
currentDateElement.innerHTML = 'Today date is:' + day + '/' + month + '/' + year


//QUESTION NO 2
function calculate() {
    let birthInput = document.getElementById('birth');
    let resultElement = document.getElementById('result 1');
    let birth = new Date(birthInput.value);
    let today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if (
        today.getMonth() < birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) {
        age--;
    }
    resultElement.innerHTML = 'Your age is:' + age + 'years';
}
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculate);


//QUESTION NO 3
function calculateDayOfWeek() {
    const inputDateStr = prompt("Enter a date (YYYY-MM-DD):");
    if (!inputDateStr) {
        alert("Invalid input. Please enter a valid date.");
        return;
    }
    const inputDate = new Date(inputDateStr);
    if (isNaN(inputDate)) {
        alert("Invalid date format. Please enter a date in YYYY-MM-DD format.");
        return;
    }
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];

    alert('The day of the week for' + ' ' + inputDateStr +' '+ 'is' + ' ' + dayOfWeek)
}
window.onload = calculateDayOfWeek


//QUESTION NO 4
function calculateDaysUntilFutureDate() {
    let inputDate = new Date(document.getElementById("futureDate 1").value);
    let currentDate = new Date();
    let timeDifference = inputDate - currentDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference === 0) {
        document.getElementById("result 2").innerHTML = "Today is the selected date!";
    } else if (daysDifference < 0) {
        document.getElementById("result 2").innerHTML = "The selected date has already passed.";
    } else {
        document.getElementById("result 2").innerHTML = "There are " + daysDifference + " days until the selected date.";
    }
}


//QUESTION NO 5
function checkWeekend() {
    let inputDate = new Date(document.getElementById("inputDate").value);
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = inputDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        document.getElementById("result 3").innerHTML = "It's a weekend!";
    } else {
        document.getElementById("result 3").innerHTML = "It's not a weekend.";
    }
}

//QUESTION NO 6
let countdownInterval;

function startCountdown() {
    var futureDate = new Date(document.getElementById("futureDate").value).getTime();

    countdownInterval = setInterval(function () {
        let currentDate = new Date().getTime();
        let timeRemaining = futureDate - currentDate;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Countdown expired!";
        } else {
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML =
                "Time Remaining: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s "
        }
    }, 1000);
}


//QUESTION NO 7
function checkSeason() {
    let input = new Date(document.getElementById("input").value);
    let month = input.getMonth() + 1;

    let season;

    if (month >= 3 && month <= 5) {
        season = "Spring";
    } else if (month >= 6 && month <= 8) {
        season = "Summer";
    } else if (month >= 9 && month <= 11) {
        season = "Fall";
    } else {
        season = "Winter";
    }

    document.getElementById("result 4").innerHTML = "The season for the entered date is " + season + ".";
}


//QUESTION NO 8
function calculateAge() {
    let birthDate = new Date(document.getElementById("birthdate").value);
    let futureDate = new Date(document.getElementById("futuredate").value);
    let age = futureDate.getFullYear() - birthDate.getFullYear();
    if (
        futureDate.getMonth() < birthDate.getMonth() ||
        (futureDate.getMonth() === birthDate.getMonth() && futureDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("result 5").innerHTML = "Your age on the future date is " + age + " years.";
}


//QUESTION NO 9
function calculateDays() {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    let timeDifference = endDate - startDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (isNaN(daysDifference)) {
        document.getElementById("result 6").innerHTML = "Please enter valid dates.";
    } else {
        document.getElementById("result 6").innerHTML = "Number of days between the two dates: " + daysDifference + " days";
    }
}


//QUESTION NO 10
function calculateWorkingDays() {
    let start = new Date(document.getElementById("start").value);
    let end = new Date(document.getElementById("end").value);
    let workingDays = 0;
    while (start <= end) {
        if (start.getDay() !== 0 && start.getDay() !== 6) {
            workingDays++;
        }

        start.setDate(start.getDate() + 1);
    }

    document.getElementById("result 7").innerHTML = "Number of working days between the two dates: " + workingDays + " days";
}
