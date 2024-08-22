async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }

  let menuToggle = document.querySelector(".menuToggle");
  let header = document.querySelector("header");
  menuToggle.onclick = function () {
    header.classList.toggle("active");
  };
}

// function calculate_1() {
//   let amount = +document.getElementById('amount').value;
//   let baseAmount = ['132', '67',];
//     // let baseAmount = +document.getElementById("baseAmount").value;
//  let result = amount * baseAmount;

//   document.getElementById('baseAmount-1').innerHTML = `${result[0]}`;
//   // document.getElementById('baseAmount').innerHTML = `${result[1]}`;

// }

function calculate_1() {
  let ingredient1 = 130;
  let ingredient2 = 80;
  let ingredient3 = 67;
  let ingredient4 = 100;
  let ingredient5 = 1;
  let ingredient6 = 10;
  let ingredient7 = 15;
  let ingredient8 = 8;
  let ingredient9 = 8;
  let ingredient10 = 8;

  let result = +document.getElementById("inputAmount").value;

  if (result < 1) {
    result = 1;
    document.getElementById("inputAmount").value = 1;
  }

  document.getElementById("baseAmount1").innerHTML = `${
    (result * ingredient1) / 2
  } g Hähnchen-Innenfilet`;
  document.getElementById("baseAmount2").innerHTML = `${
    (result * ingredient2) / 2
  } g Cocktailtomaten`;
  document.getElementById("baseAmount3").innerHTML = `${
    (result * ingredient3) / 2
  } g Feta`;
  document.getElementById("baseAmount4").innerHTML = `${
    (result * ingredient4) / 2
  } g Zucchini`;
  document.getElementById("baseAmount5").innerHTML = `${
    (result * ingredient5) / 2
  } EL Olivenöl`;
  document.getElementById("baseAmount6").innerHTML = `${
    (result * ingredient6) / 2
  } g Salz`;
  document.getElementById("baseAmount7").innerHTML = `${
    (result * ingredient7) / 2
  } g Oregano, gerebelt`;
  document.getElementById("baseAmount8").innerHTML = `${
    (result * ingredient8) / 2
  } g Thymian, gerebelt`;
  document.getElementById("baseAmount9").innerHTML = `${
    (result * ingredient9) / 2
  } g gehackter Basilikum`;
  document.getElementById("baseAmount10").innerHTML = `${
    (result * ingredient10) / 2
  } g Pfeffer`;
}

function calculate_2() {
  let ingredient1 = 1;
  let ingredient2 = 400;
  let ingredient3 = 250;
  let ingredient4 = 30;
  let ingredient5 = 1 / 2;
  let ingredient6 = 2;
  let ingredient7 = 2;
  let ingredient8 = 1;
  let ingredient9 = 1;
  let ingredient10 = 1;
  let ingredient11 = 1;
  let ingredient12 = 1;
  let ingredient13 = 1;

  let result = +document.getElementById("inputAmount").value;

  if (result < 1) {
    result = 1;
    document.getElementById("inputAmount").value = 1;
  }

  document.getElementById("baseAmount1").innerHTML = `${
    (result * ingredient1) / 2
  } kg fettreduziertes Hackfleisch`;
  document.getElementById("baseAmount2").innerHTML = `${
    (result * ingredient2) / 2
  } g gehackte Tomaten`;
  document.getElementById("baseAmount3").innerHTML = `${
    (result * ingredient3) / 2
  } ml Rinderbrühe`;
  document.getElementById("baseAmount4").innerHTML = `${
    (result * ingredient4) / 2
  } g eingelegte Jalapeno-Scheiben`;
  document.getElementById("baseAmount5").innerHTML = `${
    (result * ingredient5) / 2
  } Zwiebel`;
  document.getElementById("baseAmount6").innerHTML = `${
    (result * ingredient6) / 2
  } Knoblauchzehen`;
  document.getElementById("baseAmount7").innerHTML = `${
    (result * ingredient7) / 2
  } EL Tomatenmark`;
  document.getElementById("baseAmount8").innerHTML = `${
    (result * ingredient8) / 2
  } EL Butter zum Anbraten`;
  document.getElementById("baseAmount9").innerHTML = `${
    (result * ingredient9) / 2
  } TL Paprikapulver`;
  document.getElementById("baseAmount10").innerHTML = `${
    (result * ingredient10) / 2
  } TL Salz`;
  document.getElementById("baseAmount11").innerHTML = `${
    (result * ingredient11) / 2
  } Teelöffelspitze(n) Chilipulver`;
  document.getElementById("baseAmount12").innerHTML = `${
    (result * ingredient12) / 2
  } Teelöffelspitze(n) Pfeffer`;
  document.getElementById("baseAmount13").innerHTML = `${
    (result * ingredient13) / 2
  } TL Oregano, gerebelt`;
}
