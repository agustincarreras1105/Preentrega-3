const Proyecto = "Mi Control de Gastos";
//Variables
let presupuesto = 0;
let gasto = 0;
let saldoPresupuesto = 0;
const moneda = "AR$";
let opc = 0;
//INCIAR PROGRAMA
alert("HOLA!\nPara comenzar, registra tu presupuesto:")

presupuesto = solicitarPresupuesto("¿Cuanto dinero dispondras en el Presupuesto?");
// DECLARACION DE FUNCIONES
function solicitarPresupuesto(mensaje){
    presupuesto = Number(prompt(mensaje));
    console.log("Se establecio el monto del presupuesto: " + moneda + presupuesto);
    saldoPresupuesto = presupuesto
    return presupuesto;
}
const calcularSaldo = (presupuesto, gasto) =>{
    return presupuesto - gasto;
};
const mostrarSaldo = (saldo) =>{
    console.log("\nSaldo restante: " + moneda + saldo)
}
//EJECUCION DEL PROGRAMA
do {
    opc = Number(prompt("ingrese una opcion:\n1. Registrar gasto.\n2. Consultar saldo.\n3. <-Salir"));
    switch(opc){
    case 1:
        console.log("opcion elegida: "+ opc+"\n");
            
        do{gasto = Number(prompt("Ingresa el gasto a realizar: "));
        }while(gasto <0);

        if (gasto > saldoPresupuesto){
            alert("||| ADVERTENCIA |||\nTu gasto supera el presupuesto. Reintenta nuevamente");
        }else{
            saldoPresupuesto = calcularSaldo(saldoPresupuesto, gasto);
            console.log("<<< Gasto Registrado>>>")  
        };

        break;
    case 2:
        console.log("opcion elegida: "+ opc+"\n");
        mostrarSaldo(saldoPresupuesto);
        break;
    case 3:
        console.log("opcion elegida: "+ opc+"\n");
        break;
    default:
        alert("<<< Opcion no valida. >>>");
}}while(opc !=3);
