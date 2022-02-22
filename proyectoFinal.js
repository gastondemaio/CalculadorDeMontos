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

const opcion = parseInt(prompt("Seleccione el número con el que desea realizar la operación: DIGITE 1-INTERESES, 2-SIN.INTERESES o 3-FINAL"));

if(!isNaN(opcion)){
    if(opcion === 1 || opcion === 2 || opcion === 3){
        if(opcion === 1){
            const cuotas = parseInt(prompt("¿Desea pagar en 3, 6 o 12 cuotas?"));
            if(cuotas === 3 || cuotas === 6 || cuotas === 12){
                if(cuotas === 3){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 1;
                    while(monto != "ESC"){
                        montoFinal = monto + ((monto*3.97)/100)
                        alert("Su monto final es " + (montoFinal) + " debe pagar 6 cuotas de " + (montoFinal)/3)
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }
                else if(cuotas === 6){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 1;
                    while(monto != "ESC"){
                        montoFinal = monto + ((monto*7.95)/100)
                        alert("Su monto final es " + (montoFinal) + " debe pagar 6 cuotas de " + (montoFinal)/6)
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }
                else if(cuotas === 12){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    let montoFinal = 1;
                    while(monto != "ESC"){
                        montoFinal = monto + ((monto*16.19)/100)
                        alert("Su monto final es " + (montoFinal) + " debe pagar 12 cuotas de " + (montoFinal)/12)
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC");
                    }
                }else{
                    alert("Error")
                }
            }
        }else if(opcion === 2){
            const cuotas = parseInt(prompt("¿Desea pagar en 3, 6 o 12 cuotas?"));
            if(cuotas === 3 || cuotas === 6 || cuotas === 12){
                if(cuotas === 3){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 3 cuotas de " + (monto/3))
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC")
                    }
                }
                else if(cuotas === 6){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 6 cuotas de " + (monto/6))
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC")
                    }
                }
                else if(cuotas === 12){
                    let monto = parseInt(prompt("Ingrese el monto que debe abonar"));
                    while(monto  != "ESC"){
                        alert("Su monto final es " + monto + " debe pagar 12 cuotas de " + (monto/12))
                        monto = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC")
                    }
                }else{
                    alert("Error")
                }
            }
        }else if(opcion === 3){
            let monto = parseInt(prompt("Ingrese el monto que debe abonar"))
            while(monto != "ESC"){
                alert("Su monto final es " + monto)
                montoFinal = prompt("¿Desea ingresar otro monto? Si no lo desea digite ESC")
            }
        }
    }else{
        alert("Opcion invalida") 
    }
}else{
    alert("ERROR")
}