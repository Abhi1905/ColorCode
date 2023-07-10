// const btn = document.getElementById("btn");

// function getRandomNumber() {
//   const randomNumber = Math.random();
//   console.log(randomNumber);
//   return randomNumber;
// }

// btn.addEventListener("click", getRandomNumber); 

const getColor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomHex = "#"+ randomNumber.toString(16)
    console.log(randomHex);
    document.body.style.backgroundColor = randomHex;
    document.getElementById("code").innerHTML=randomHex;
    navigator.clipboard.writeText(randomHex)
}

document.getElementById("btn").addEventListener(
  "click",
  getColor
)