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

const win = () => {
    console.log('WIN');
}

const lose = () => {
    console.log('LOSE');
}

const draw = () => {
    console.log('DRAW');
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break
        case "rp":
        case "ps":
        case "sr":
            lose();
            break
        case "rr":
        case "pp":
        case "ss":
            draw();
            break
    }
}

const main = () => {
rock_div.addEventListener('click', clicked = () => game("r"));

paper_div.addEventListener('click', clicked = () => game("p"));

scissors_div.addEventListener('click', clicked = () => game("s"));
}

main();

