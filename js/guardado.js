const opcion = parseInt(prompt("Seleccione el número con el que desea realizar la operación: DIGITE 1-INTERESES, 2-SIN.INTERESES o 3-FINAL"));

if(!isNaN(opcion)){
    if(opcion === 1 || opcion === 2 || opcion === 3){
        if(opcion === 1){
            const cuotas = parseInt(prompt("¿Desea pagar en 3, 6 o 12 cuotas?"));
            if(cuotas === 3 || cuotas === 6 || cuotas === 12){
                if(cuotas === 3){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 0;
                    while(monto != 0){
                        montoFinal = monto + ((monto*3.97)/100);
                        alert("Su monto final es " + (montoFinal) + " debe pagar 3 cuotas de " + (montoFinal)/3);
                        monto = parseInt(prompt("¿Desea ingresar otro monto? |SI-1|NO-0|"));
                        if(monto === 1){
                            monto = parseInt(prompt("Ingrese un monto"));
                        }else{
                            alert("Gracias por usar nuestros servicios");
                        }
                    }
                }
                else if(cuotas === 6){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 0
                    while(monto != 0){
                        montoFinal = monto + ((monto*7.95)/100)
                        alert("Su monto final es " + (montoFinal) + " debe pagar 6 cuotas de " + (montoFinal)/6)
                        monto = parseInt(prompt("¿Desea ingresar otro monto? |SI-1|NO-0|"));
                        if(monto === 1){
                            monto = parseInt(prompt("Ingrese un monto"));
                        }else{
                            alert("Gracias por usar nuestros servicios");
                        }
                    }
                }
                else if(cuotas === 12){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 0
                    while(monto != 0){
                        montoFinal = monto + ((monto*16.19)/100)
                        alert("Su monto final es " + (montoFinal) + " debe pagar 12 cuotas de " + (montoFinal)/12)
                        monto = parseInt(prompt("¿Desea ingresar otro monto? |SI-1|NO-0|"));
                        if(monto === 1){
                            monto = parseInt(prompt("Ingrese un monto"));
                        }else{
                            alert("Gracias por usar nuestros servicios");
                        }
                    }
                }else{
                    alert("Error");
                }
            }
        }else if(opcion === 2){
            const cuotas = parseInt(prompt("¿Desea pagar en 3, 6 o 12 cuotas?"));
            if(cuotas === 3 || cuotas === 6 || cuotas === 12){
                if(cuotas === 3){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 3 cuotas de " + (monto/3));
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }
                else if(cuotas === 6){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 6 cuotas de " + (monto/6));
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }
                else if(cuotas === 12){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 12 cuotas de " + (monto/12));
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }else{
                    alert("Error");
                }
            }
        }else if(opcion === 3){
            let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
            while(monto != "ESC" && monto != "esc"){
                alert("Su monto final es " + monto);
                monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
            }
        }
    }else{
        alert("Opcion invalida");
    }
}else{
    alert("ERROR");
}

class Calculo {
    constructor(monto, cuotas, porcentajeInteres){
        this.monto = monto;
        this.cuotas = cuotas;
        this.interes = parseFloat(porcentajeInteres)
    }

    calculoIntereses(){
        return (this.monto + ((this.monto*this.porcentajeInteres)/100))/this.cuotas;
    }

    calculoSinInteres(){
        return this.monto/this.cuotas;
    }

    calculoMontoFinal(){
        return this.monto
    }
}

let arrayMontos = [];

    do{
        const opcion = parseInt(prompt("Ingrese un monto o digite 0 para salir"));
        if(opcion === 0){
            break;
        }
        else{
            montoM = opcion;
            let cuotasM = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar: |3|6|12|"))
            let porcentajeInteresM = parseFloat(prompt("Ingrese el porcentaje adecuado: |3-3.97|6-7.95|12-16.19|"))
            arrayMontos.push(new Calculo(montoM, cuotasM, porcentajeInteresM))
        }
    }
    while(opcion != 0)

console.log(arrayMontos);