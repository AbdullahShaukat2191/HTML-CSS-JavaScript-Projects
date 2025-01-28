//NUMBER GUESSING GAME

console.clear();

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let running = true;
let guess;

while (running) {
    guess = Number(window.prompt(`Enter a Number Between 1 & 100:`));

    if (isNaN(guess)) {
        window.alert("Please Enter a Valid Number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please Enter a Valid Number");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else {
            window.alert(`YOU WON! IT TOOK YOU ${attempts} ATTEMPTS!`);
            running = false;
        }
    }
}