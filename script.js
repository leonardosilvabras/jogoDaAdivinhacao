//variaveis
const screenOne = document.querySelector(".screenOne"),
  screenTwo = document.querySelector(".screenTwo"),
  btnTry = document.querySelector("#btnTry"),
  inputNumber = document.querySelector("#inputNumber");

let random = Math.floor(Math.random() * 5),
  kicks = 1;

//funcoes
reloadClassBtns = () => {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
};

handleTryClick = (e) => {
  e.preventDefault();

  if (inputNumber.value == random) {
    reloadClassBtns();

    screenTwo.querySelector(
      "h2"
    ).innerText = `Acertou em ${kicks} tentativa(s)`;
  } else kicks++;
};

//atribuicao de funcoes
btnTry.addEventListener("click", handleTryClick);
