let random = Math.floor(Math.random() * 5),
  kicks = 1;

const screenOne = document.querySelector(".screenOne"),
  screenTwo = document.querySelector(".screenTwo");

reloadClassBtns = () => {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
};

handleTryClick = (e) => {
  e.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value == random) {
    reloadClassBtns();

    document.querySelector(
      ".screenTwo h2"
    ).innerText = `Acertou em ${kicks} tentativa(s)`;
  } else kicks++;
};

gameAgain = () => {
  e.preventDefault();
  kicks = 1;
  reloadClassBtns();
};

const btnTry = document.querySelector("#btnTry"),
  btnAgain = document.querySelector("#btnAgain");

btnTry.addEventListener("click", handleTryClick);
btnAgain.addEventListener("click", gameAgain);
