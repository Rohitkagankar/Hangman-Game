const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord,wrongGuessCount =0;
const maxGuesses = 6;

const getRandomWord = () => {
    //Selecting a random word and hint from wordlist
    const {word,hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord=word;
    console.log(word);
    document.querySelector(".hint-text b").innerText=hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const initGame =(button,clickedLetter) =>{
    //Checking clickedLetter is exist on the currentword
    if(currentWord.includes(clickedLetter)){
        //showing all correct letters on the word display
        [...currentWord].forEach((letter,index)=>{
            if(letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerHTML=letter;
                wordDisplay.querySelectorAll("li")[index].clickList.add("guessed");
            }
        })
    }else{
        wrongGuessCount++;
    }
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}


//Creating keyboard buttons
for (let i= 97; i<= 122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click",e =>initGame(e.target,String.fromCharCode(i)));
}

getRandomWord();
