let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertedToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

const win = (userChoice, computerChoice) => {
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertedToWord(userChoice)} 😎 beats ${convertedToWord(computerChoice)} 🤖. You Win 🔥`
    userChoice_div.classList.add('green-glow');
    setTimeout( () => userChoice_div.classList.remove('green-glow'), 500);
}

const lose = (userChoice, computerChoice) => {
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertedToWord(userChoice)} ☹️ lose to ${convertedToWord(computerChoice)} 🤖. You Lost 💩`
    userChoice_div.classList.add('red-glow');
    setTimeout( () => userChoice_div.classList.remove('red-glow'), 500);
}

const draw = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertedToWord(userChoice)} 😵️ draw to ${convertedToWord(computerChoice)} 🤖. It's a Draw 🤷‍♂️`
    userChoice_div.classList.add('yellow-glow');
    setTimeout( () => userChoice_div.classList.remove('yellow-glow'), 500);
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break
    }
}

const main = () => {
rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
scissors_div.addEventListener('click', () => game("s"));
}

main();

