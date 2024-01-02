// Initial Refrences

//Question or Images
const questions = [{
    image: "Alakazam.jpg",
    correct_option: "Alakazam",
},
{
    image: "Arcanine.jpg",
    correct_option: "Arcanine",
},
{
    image: "Bulbasaur.jpg",
    correct_option: "Bulbasaur",
},
{
    image: "Cubone.jpg",
    correct_option: "Cubone",
},
{
    image: "Ditto.jpg",
    correct_option: "Ditto",
},
{
    image: "Gloom.jpg",
    correct_option: "Gloom",
},
{
    image: "Gyarados.jpg",
    correct_option: "Gyarados",
},
{
    image: "Hitmonlee.jpg",
    correct_option: "Hitmonlee",
},
{
    image: "Horsea.jpg",
    correct_option: "Horsea",
},
{
    image: "Koffing.jpg",
    correct_option: "Koffing",
},
{
    image: "Mewtwo.jpg",
    correct_option: "Mewtwo",
},
{
    image: "Seaking.jpg",
    correct_option: "Seaking",
},
{
    image: "Tauros.jpg",
    correct_option: "Tauros",
},
{
    image: "Venonat.jpg",
    correct_option: "Venonat",
},
{
    image: "Victreebe.jpg",
    correct_option: "Victreebe",
},
{
    image: "Evee.jpg",
    correct_option: "Eevee"
}
];
// All options
const optionsArray = [
    "Alakazam",
    "Arcanine",
    "Bulbasaur",
    "Cubone",
    "Ditto",
    "Gloom",
    "Gyarados",
    "Hitmonlee",
    "Horsea",
    "Koffing",
    "Mewtwo",
    "Pikachu",
    "Seaking",
    "Tauros",
    "Venonat",
    "Victreebel",
    "Evee",
    "Ivysaur",
    "Venasaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Exeggcute"
];
const container = document.querySelector(".container");
const gameContainer = document.querySelector(".gane-container");
const startButton = document.getElementById("start");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
let timer = document.getElementsByClassName("timer")[0];
let nextBtn;
let score, currentQuestion, finalQuestion;
let countdown, count = 11;

//random value from array
function randomValuegenerator(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Random shuffle array
function randomShuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

//Start game
const startGame = () => {
    //Select random any 5 questions
    scoreContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
    finalQuestion = populateQuestion();
    score = 0;
    currentQuestion = 0;
    //Generate card for first question
    cardGenerator(finalQuestion[currentQuestion]);
};