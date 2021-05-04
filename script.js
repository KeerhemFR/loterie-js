let loto = [];
let nombre = 1;
let j;
let cadeau;

function ajout(){
  let nom = prompt("Ajoutez un nom pour le tirage");
  while(nom == ""){
    nom = prompt("Pas de valeur rentrée. Ajoutez un nom pour le tirage");
  };
  loto.push(nom);
  document.getElementById("squalala").innerHTML = loto.join("<br>");
};

function reset(){
  loto = []
  document.getElementById("squalala").innerHTML = loto;
};

function degage(){
  loto.pop();
  document.getElementById("squalala").innerHTML = loto;
}

function roll(){
  j = loto.length;
  for(nombre = 1; nombre < j+1; nombre++){
    t = loto.length;
    cadeau = Math.floor(Math.random() * t);
    alert("Le cadeau numéro " + nombre + " est gagné par " + loto[cadeau] + "!");
    loto.splice(cadeau, 1);
  };
};
