    alert("Bienvenido a tu simulador de cuotas para vivienda propia");
    let nombre = prompt("Cual es tu nombre?");
    let valorHome = parseInt(prompt("Cual es valor de la propiedad que deseas obtener?"));
    let anos = parseInt(prompt(`${nombre} en cuantos años deseas finalizar tu deuda?`));
    let interes = "1.10";
    

    let pagoInicial = parseInt(prompt("Cuanto Considerarias darnos para Pago Inicial o Downpayment?"));
    if (pagoInicial <= 1000) {
        let opcion1 = (`${nombre} Ingresaste ${pagoInicial} Lamentablemente no podemos projectar cuotas ya que es muy bajo el pago inicial`);
        alert(opcion1);
    } else if (pagoInicial <= 2000) {
        let opcion2 = (`${nombre} Ingresaste ${pagoInicial} Super ...! para ello intentaremos ofrecerte los menores interes`);
        alert(opcion2);
    } else if (pagoInicial <= 3000) {
        let opcion3 = (`${nombre} Ingresaste ${pagoInicial} Perfecto ...! contamos con opciones para ti, Tenemos los menores intereses`);
        alert(opcion3);
    } else if (pagoInicial <= 4000) {
        let opcion4 = (`${nombre} Ingresaste ${pagoInicial} Excelente...! Contamos con los mas bajos intereses del mercado para ti`);
        alert(opcion4);
    } else if (pagoInicial <= 8000) {
        let opcion5 = (`${nombre} Ingresaste ${pagoInicial} Estamos muy contentos por ti...!Contamos con los mas bajos intereses del mercado para ti + un descuento adicional`);
        alert(opcion5);
    } else {
        alert("No se Aplica estos valores tan altos para un Downpayment, Intenta nuevamente");
    }
    
    function f1(valorHome, pagoInicial, interes, anos ) {
        let resultado = ((valorHome - pagoInicial) * (interes)) / (12*anos);
        let mensaje = (`${nombre} Gracias por aplicar , con tu informacion recolectada y la cantidad de años tus pagos mensuales serian de ${resultado}`);
        resultado = Math.floor(resultado);
        alert(mensaje);
    }

if (pagoInicial <= 8000) {
    f1(valorHome, pagoInicial, interes, anos);
    let mensaje2 = "Felicidades Tendras un descuento adicional del 15% del valor de la propiedad";
    alert(mensaje2);
    
    }
