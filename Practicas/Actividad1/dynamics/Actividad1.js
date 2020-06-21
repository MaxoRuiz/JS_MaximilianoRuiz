//Las variables para recibir donde esta Gama
var gama= parseInt(prompt("¿En qué piso estas Gama?"));
var ela= parseInt(prompt("¿En qué piso esta el elevador A?"));
var elb= parseInt(prompt("¿En qué piso esta el elevador B?"));
//Condición de que si pone cancel o no ingrese nada, ingrese datos
if (gama==null||ela==null||elb==null) {
  alert("Ingresa un valor en el prompt");
}
//Condición si ingresa un valor no númerico
else if ((isNaN(gama))||(isNaN(gama))||(isNaN(gama))) {
  alert("Alguno de tus valores no es númerico, ingresa nuevamente")
}
//Si ingreso bien los datos, procederá a saber el mejor piso para Gama
else {
  var difA=Math.abs(ela=ela-gama);
  var difB=Math.abs(elb=elb-gama);
  //Si la diferencia de A es menor a la de B, le queda mejor ir a A
  if (difA<difB) {
    alert("Gama te conviene ir al elevador A");
  }
  //Si la diferencia de B es menor a la de A, le queda mejor ir a B
  else if (difA>difB) {
    alert("Gama te conviene ir al elevador B");
  }
  //Si amabas diferencias son iguales, cualquiera de los dos elevadores le quedan
  else if (ela=elb) {
    alert("Gama ambos elevadores te quedan a la misma distancia");
  }
}
