
let punti = 0;
const listaBombe = [];
for (let n=1, j=16; n<=j; n++) {
  let numerobomba = Math.round(Math.random() * 100);
      if (!listaBombe.includes(numerobomba)) {
          listaBombe.push(numerobomba);
  }
} console.log(listaBombe);

//return difficoltà
const difficolta = document.getElementById("difficulty");
function selectDifficulty() {
  return difficolta.value;
}

//difficoltà play button
const play = document.getElementById("play");
play.addEventListener("click", function () {
  const getDifficolta = selectDifficulty();
  if (getDifficolta === "easy") createGrid(7, 7);
  else if (getDifficolta === "normal") createGrid(9, 9);
  else createGrid(10, 10);
});
const 
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
  }
    //click cella
    cell.addEventListener("click", function () {
      console.log(this.innerText);
      if (listaBombe.includes(this.innerText)) {
        cell.classList.add("bomb");
        alert("hai perso");
        campoMinato.innerHTML = "";
      } else {
        punti = punti + 1;
        cell.classList.add("clicked");
      }
    });
  
}
