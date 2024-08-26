
const textArea = document.querySelector(".text-area");  
const mensaje = document.querySelector(".text-mensaje");  
const btnCopiar = document.querySelector(".btn-copiar");
const btnCifrar = document.querySelector(".container_botonCifrar");
const btnDecifrar = document.querySelector(".container_botonDecifrar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function limpiar(){
mensaje.value = "";
}

function copiar(elemento){
  var aux = document.createElement("input");
  aux.setAttribute ("value", document.getElementById (elemento).value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux); 

  limpiar();
  alert("El Texto : --- > "+ aux.value +" , ha sido copiado" );
  deshabilitaBoton();
}




function cifrarTexto(){
  const textoEncritptado = encriptacion(textArea.value);
  mensaje.value = textoEncritptado;
  textArea.value = "";
  
  }


function encriptacion(texto){
  let conjuntoCodigo =[["e","enter"],["i","imes"],["a" , "ai"],["o" , "ober"], ["u" , "ufat"]];
    texto = texto.toLowerCase();
  
  for (let i = 0 ; i < conjuntoCodigo.length ; i++ ){
    if (texto.includes(conjuntoCodigo[i][0])){
      texto = texto.replaceAll(conjuntoCodigo [i][0], conjuntoCodigo [i][1]);
    }

  }
  habilitaBoton();
  return texto;
}


function decifrarTexto(){
  const textoDesencritptado = desencriptacion(textArea.value);
  mensaje.value = textoDesencritptado;
  return;
}


function desencriptacion(texto){
  let conjuntoCodigo =[["e","enter"],["i","imes"],["a" , "ai"],["o" , "ober"], ["u" , "ufat"]];
    texto = texto.toLowerCase()

  for (let i = 0 ; i < conjuntoCodigo.length ; i++ ){
    if (texto.includes(conjuntoCodigo[i][1])){
      texto = texto.replaceAll(conjuntoCodigo [i][1], conjuntoCodigo [i][0]);
    }

  }
  habilitaBoton();
  return texto;
}





function validarMayuscula() {
    var texto = textArea.value;
    if (texto != texto.toUpperCase() && !/\d/.test(texto)) { 
      habilitaBoton();
      limpiar();
     } else {
      deshabilitaBoton();
        imprimir("Recuerde : Usar solo minúsculas , No deben ser utilizados letras con acentos ni caracteres especiales y sin números");
    }
    return;
  }




function imprimir(texto){
    mensaje.innerHTML = texto;
    return;
}

function habilitaBoton(){
  btnDecifrar.removeAttribute('disabled');
  btnCifrar.removeAttribute('disabled');
  btnCopiar.removeAttribute ('disabled');
}



function deshabilitaBoton() {
  btnDecifrar.disabled = true;
  btnCifrar.disabled = true;
  btnCopiar.disabled = true;
}
