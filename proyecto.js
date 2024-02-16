//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "));

if(edad>=18){
    var casado = prompt("¿Está casado actualmente?")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  if("SI" == casado.toUpperCase()){
    edad_conyuge = parseInt(prompt("¿Que edad tiene su conyugue?"));
  }
  //convirtiendo las edades ingresadas a números 
  var edad_numero = edad
  var edad_conyuge_numero = edad_conyuge;

  var hijos = prompt("¿Tiene hijos o hijas?")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos=0;
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  if("SI"==hijos.toUpperCase()){
    cantidad_hijos= parseInt(prompt("Cuantos hijos tiene?"));
  }
  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_18;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  //aqui puede colocar un else if() con el siguiente rango
  if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_25
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  // 2. Recargo por la edad del conyuge
  if(edad_conyuge_numero>49){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_50;
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  //aqui puede colocar un else if() con el siguiente rango
  if(edad_numero>=25 && edad_numero<50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_25
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  // 2. Recargo por la edad del conyuge
  if(edad_numero>49){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_50
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
   //3. Recargo por la cantidad de hijos 
   recargo = precio_base*(cantidad_hijos*hijos_recargo);
   recargo_total+=recargo;
 //
  precio_final = precio_base + recargo_total
  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: "+recargo_total)
  alert ("El precio sera de: "+precio_final)  
} else{
  alert("El asegurado: "+nombre+" NO ES MAYOR DE EDAD");
}