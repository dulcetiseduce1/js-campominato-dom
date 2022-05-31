//crea griglia
function createGrid(Col, Row) {
  //dimensioni 50 x Col
  const campoMinato = document.querySelector(".campo-minato");
  campoMinato.style.width = `calc(50px * ${Col})`;
  campoMinato.innerHTML = "";
  //totale caselle della grid
  const Grid = Col * Row;
  // ciclo in base al numero del grid
  for (let i = 1; i <= Grid; i++) {
    // cella html
    const cell = document.createElement("div");
    cell.classList.add("cell");
    campoMinato.append(cell);
    //cell index
    cell.innerText = `${i}`;

    //click cella
    cell.addEventListener("click", function () {
      cell.classList.add("clicked");
    });
  }
}


//difficoltà play button
const play = document.getElementById("play");
play.addEventListener("click", function () {
  createGrid(10, 10);
});

//

//genero array 16 numeri casuali da 1 a 100 no repeat
function generateBombs() {
  const bombsList = [];

  while (bombsList.length < 16) {
    const randomNumber = getRandomNumber(1, 100);
    {
      if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber);

      }
    }
  }        console.log(randomNumber);

  console.log(bombsList);
}
//se clicco uno di quei numeri nella lista partita finita

//comunica punteggio

//utente clicca tutti numeri blu finisce

// switch(selectDifficulty()) {
//     case getDifficolta === "easy":
//         createGrid(7, 7)
//       break;
//     case (getDifficolta === "medium"):
//         createGrid(9, 9)
//       break;
//     case (getDifficolta === "hard"):
//         createGrid(10, 10)
//         break;
//   }})
