/*
Calculadora de compras en cuotas con intereses y compras con precio final
1. Pedirle al usuario como desea pagar su monto.
2. Almacenar el monto en una variable (monto)
3. Definir una variable para almacenar el monto final (monto final)
4. Si la opcion de pago es:
    4.1 Preguntar si lo desea pagar en cuotas con intereses.
    4.2 Preguntar si lo desea pagar en cuotas sin intereses.
    4.3 Preguntar si lo desea pagar en una sola cuota.
5. Mientras que el usuario ingrese un monto.
    5.1 Pedirle al usuario que ingrese el monto a abonar
    5.2 Modificar el monto final
6. Preguntar si quiere ingresar otro numero
    5.1 Si lo desea, se repite 4.
    5.2 Si no lo desea se termina la secuencia.
7. Mostrar por pantalla el resultado.
*/

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