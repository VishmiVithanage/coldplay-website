function getRadioValue(radioArray) {
    var i;
    for(i=0; i<radioArray.length; i++) {
        if(radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return -1;
}

function timer() {
    var setTimer = setInterval(showResults, 60000);
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function reviewAnswers() {
    var homeBox = document.getElementById("home_area").hidden = true;
    var questionBox = document.getElementById("questions_area").hidden = false;
    var resultsBox = document.getElementById("results_area").hidden = true;
    document.body.style.backgroundColor = "#63656a";
}

function showQuestions() {
    var homeBox = document.getElementById("home_area").hidden = true;
    var questionBox = document.getElementById("questions_area").hidden = false;
    var resultsBox = document.getElementById("results_area").hidden = true;

    timer();
}

function showResults () {
    var homeBox = document.getElementById("home_area").hidden = true;
    var questionBox = document.getElementById("questions_area").hidden = true;
    var resultsBox = document.getElementById("results_area").hidden = false;

    var selectedAnswers = [];
    for(let j = 0; j < 10; j++) {
        var name = "answer" + (j+1);
        var allAnswers = [];
        allAnswers = document.getElementsByName(name);

        var selectedAnswer = getRadioValue(allAnswers);
        selectedAnswers[j] = selectedAnswer;
    }

    let score = 0;
    const correctAnswers = [1,3,1,0,0,2,1,1,0,2];
    for(let i = 0; i < selectedAnswers.length; i++) {
        var id = "q" + (i+1);
        if(selectedAnswers[i] == correctAnswers[i]) {
            score += 2;
            document.getElementById(id).innerHTML = "correct";
        } else {
            score -= 1;
            document.getElementById(id).innerHTML = "incorrect";
        }
    }

    document.getElementById("total").innerHTML = "Your score is " + score;

    document.body.style.backgroundColor = "yellow";

    if(score <= 4) {
        document.body.style.backgroundColor = "#1B1B1B";
    } else if(score > 16){
        document.body.style.backgroundColor = "#101820FF";
    }
}
