// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var propiedades = Object.keys(objeto);
  var contenido=Object.values(objeto);
  var result=[];
  for (i=0; i<propiedades.length;i++){
var a=propiedades[i];
var b=contenido[i];
result.push([a,b])
  }
 return result;
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objetode={};
  for (i=0;i<string.length;i++){
    
    if (!objetode[string[i]]){
      objetode[string[i]]=1;
  }
  else { 
    objetode[string[i]]=objetode[string[i]]+1;
}
  }
  return objetode;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula='';
  var minuscula=''
  for(i=0;i<s.length;i++){
    if(s[i].toUpperCase()===s[i]){
        mayuscula=mayuscula+s[i];
    
    }
    else{
        minuscula=minuscula+s[i];
    }
  }
  return mayuscula+minuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var arrStr= str.split(" ");
 var strMirror="";

 for(i=0; i<arrStr.length;i++){
   if(i===arrStr.length-1){
     var temp= arrStr[i].split("").reverse().join("")
      strMirror=strMirror+temp;
    }
    else{
      var temp=arrStr[i].split("").reverse().join("");
      strMirror=strMirror+temp+" ";
    }
 }
 return strMirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero1=numero.toString();
  numero2=numero1.split('').reverse();
  numero3=numero2.join("");
  if(numero3 === numero1){
    return 'Es capicua';
  }
  else{
    return'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadenan=cadena.split('');
  for(i=0;i<cadenan.length;i++){
    if(cadenan[i]==='a'){
  delete cadenan[i];
  }
    else if(cadenan[i]==='b'){
    delete cadenan[i];

  }
  else if(cadenan[i]==='c'){
    delete cadenan[i];
  }
}
return cadenan.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrd=arr.slice(0,1);
  var arrOrdIzq;
  var arrOrdDer;

  for(var i=1; i< arr.length ;i++)
  {
    for(var j=0; j< arrOrd.length ; j++)
    {
      if(arrOrd[j]. length>arr[i].length)
      {
        arrOrdIzq=arrOrd.slice(0,j);
        arrOrdDer=arrOrd.slice(j);

        arrord=arrOrdIzq.concat(arr[i]).concat(arrOrdDer);
        break;
      }

      if(j === arrOrd.length-1){
        arrOrd.push(arr[i]);
        break;
      }
    }
  }
  return arrOrd;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrInter=[];
  for(i=0; i<arreglo1.length;i++){
    for(j=0;j<arreglo2.length;j++){
      if(arreglo2[j]===arreglo1[i]){
        arrInter.push(arreglo2[j]);
        break;
      }
    }
  }
  return arrInter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

