
alert("Bienvenido a tu simulador de cuotas para vivienda propia");
let nombre= prompt("Cual es tu nombre?");
let PagoInicial= parseInt(prompt("Cuanto Considerarias darnos para Pago Inicial o Downpayment?"));

if (PagoInicial <= 1000) {
    let opcion1 = (`${nombre} Ingresaste ${PagoInicial} Lamentablemente no podemos projectar cuotas ya que es muy bajo el pago inicial`);
    alert(opcion1);
} else if (PagoInicial <= 2000) {
    let opcion2 = (`${nombre} Ingresaste ${PagoInicial} Super ...! para ello intentaremos ofrecerte los menores interes`);
    alert(opcion2);
}else if (PagoInicial <= 3000) {
    let opcion3 = (`${nombre} Ingresaste ${PagoInicial} Perfecto ...! contamos con opciones para ti, Tenemos los menores intereses`);
    alert(opcion3);
}else if (PagoInicial <= 4000) {
    let opcion4 = (`${nombre} Ingresaste ${PagoInicial} Excelente...! Contamos con los mas bajos intereses del mercado para ti`);
    alert(opcion4);
}else if (PagoInicial <= 8000 ) {
    let opcion5 = (`${nombre} Ingresaste ${PagoInicial} Estamos muy contentos por ti...! Contamos con los mas bajos intereses del mercado para ti + un descuento adicional`);
    alert(opcion5);
}else {
    alert("No Aplicamos valores tan altos para un Downpayment, Intenta nuevamente");
}

