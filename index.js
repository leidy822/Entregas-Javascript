
alert("Bienvenido a tu simulador de cuotas para vivienda propia");

let precioCasa = parseInt(prompt("Cuanto es el costo de la Vivienda que deseas Adquirir?"));

if (precioCasa <= 100.000) { 
    let opcion1 = (`Ingresaste ${precioCasa} Contamos con Aproximadamente 10 diferentes opciones para ti`);
    alert(opcion1);
}
else if (precioCasa < 100.000 ) { 
    let opcion2 = (`Ingresaste ${precioCasa} Contamos con Aproximadamente 15 diferentes opciones para ti`);
    alert(opcion2);
}
else if (precioCasa  < 200.000) {
    let opcion3 = (`Ingresaste ${precioCasa} Contamos con Aproximadamente 25 diferentes opciones para ti`);
    alert(opcion3);
}
else if (precioCasa < 400.000) {
    let opcion4 = (`Ingresaste ${precioCasa} Contamos con Aproximadamente 30 diferentes opciones para ti`);
    alert(opcion4);
}
    
else if (precioCasa <= 500.000) {
    alert("Lamentablemente no contamos con viviendas de este valor.. Gracias por Visitarnos");
}

/* 
let precioAdsequible = parseInt(prompt("Ingrese cuanto podria pagar mensual en usd (Dolar Americano)"));

if (precioAdsequible < 1000) {
    alert("No puedes Aplicar a nuestras viviendas");
    //retorn
    
}
else (precioAdsequible > 1000) {
    alert(" Felicitaciones! Puedes Aplicar a nuestras viviendas");
    alert("Iniciemos...");
}

let anos = parseInt(promp(""));


function problema();


let precioPropiedad = "500.000";


let valor = (`hola ${precioPropiedad}`);
alert(valor); */   