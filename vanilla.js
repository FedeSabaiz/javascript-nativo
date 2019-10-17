var s = document.getElementById('thing').style;
let morelos = document.getElementById('thing');
morelos.classList.add('lol')
s.opacity = 1;

(function fade(){(s.opacity-=.1)<0?s.visibility = 'hiden':setTimeout(fade,1000)})();

// Se ejecuta tras haber cargado el body
document.body.onload = addElement;

function addElement () { 
  // crea un nuevo div 
  // y añade contenido 
  let newDiv = document.getElementById('thing');
//   var newDiv = document.createElement("div"); 
//   newDiv.id = 'soyDiv'
  function changeElement() {
    let newDiv =document.getElementById('thing');
    let textD = document.createTextNode('Hola, soy otro div');
    newDiv.appendChild(textD);

  }
  setTimeout(changeElement, 500);
//   console.log(document.getElementById('soyDiv').childNodes);
  // Crea texto
  var firstContent = document.createTextNode("Hola, este es un ejercicio"); 
  newDiv.appendChild(firstContent); //añade texto al div creado. 

  var segContent = document.createTextNode("Hola, este es un ejercicio"); 
  newDiv.appendChild(segContent); //añade texto al div creado. 

  // añade el elemento creado y su contenido al DOM 
  var currentDiv = document.getElementById("div"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

console.log(document.querySelectorAll('div'));
