//use queryselector instead of getelementbyId
const button = document.querySelector(".myBtn");
const myDiv = document.querySelector("#myDiv");


const change = () => {
    myDiv.style.background = 'lightblue';
};
button.addEventListener("click", change);