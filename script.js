let random = Math.floor(Math.random() * 5),
  kicks = 1;

handleClick = (event) => {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value == random) {
    document.querySelector(".screenOne").classList.add("hide");
    document.querySelector(".screenTwo").classList.remove("hide");

    document.querySelector(
      ".screenTwo h2"
    ).innerText = `Acertou em ${kicks} tentativa(s)`;

    random = Math.floor(Math.random() * 5);
    kicks = 1;
  } else kicks++;
};

gameAgain = (event) => {
  event.preventDefault();
  document.querySelector(".screenOne").classList.remove("hide");
  document.querySelector(".screenTwo").classList.add("hide");
};
