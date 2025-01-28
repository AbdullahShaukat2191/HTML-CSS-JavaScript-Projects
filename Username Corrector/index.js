// USERNAME CORRECTOR
console.clear();

const myH1 = document.getElementById("myH1");
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    let userName = myText.value;
    userName = userName.trim();

    let firstName = userName.slice(0, userName.indexOf(" "));
    let lastName = userName.slice(userName.indexOf(" ") + 1);

    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();

    myH1.textContent = `Your user name is: ${firstName + " " + lastName}`;
}
