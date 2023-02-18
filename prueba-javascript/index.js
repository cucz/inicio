//const numeros = [15,56,64,77,1,90,121,433,0];

//const numeros2 = [];
//for(let i=0; i < numeros.length; ++i){

  //  console.log("variable control", i);
    //console.log ("valor dentro del array",numeros [8]);

    //numeros2.push(numeros[i]*2)
    //console.log(numeros2);
//}
//const numeros = [15,56,64,77,1,90,121,433,0];

//const numeros2 = [];

//numeros.forEach((num) => {
  //  console.log(num);
    //numeros2.push(num*2);
   // console.log(numeros2);
//})




//function CreaUsuario (nombre,apellido,edad,sexo){
//  return{
 //   nombre,
 //   apellido,
   // edad,
 //   sexo,
  //  MayorDeEdad: edad >=18
//  }
///}
 // const usuario1 = CreaUsuario("danny", "mantilla", 39, "masculino");
//  const usuario2 = CreaUsuario("rafa", "cardenas", 15, "femenino");


//console.log(usuario1);
//console.log(usuario2);


//const multiply =(numero1,numero2) => numero1 * numero2
//const resultado = multiply(2,9);
//console.log(resultado);



/*const multiplica=(numero1, numero2) =>{
  if(numero1 > 5 || numero2 < numero1){
    return numero1 *numero2;
} else if (numero1 > 3 && numero2 <= 9 ){
  return numero2/numero1; 
} else{
  return numero1 + numero2;
}
}
const resultado = multiplica(5,5);
console.log(resultado);  */


const a = [3,2,7,1];

const r = a.map(x => x * 2 - 1).reduce((x,y) => x+y, 0)

console.log(r);