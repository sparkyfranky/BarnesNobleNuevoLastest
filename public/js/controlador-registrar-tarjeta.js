'use strict';

const inputNombre1 = document.querySelector('#txt-nombre');
const inputNumTarjeta = document.querySelector('#nmr-tarjeta');
const inputExpiracion = document.querySelector('#dt-expiracion');
const inputCVV = document.querySelector('#nmr-cvv');
const inputTipoTarjeta = document.querySelector('#slt-tipoTarjeta');


let validar = (pnombre1, pnumTarjeta, pexpiracion, pcvv, ptipotarjeta ) => {
    let error = false;
    if (pnombre1 == '') {
        error = true;
        inputNombre1.classList.add('input_error');
    } else {
        inputNombre1.classList.remove('input_error');
    }

    if (pnumTarjeta == '') {
        error = true;
        inputNumTarjeta.classList.add('input_error');
    } else {
        inputNumTarjeta.classList.remove('input_error');
    }

    if ( pexpiracion == '') {
        error = true;
        inputExpiracion.classList.add('input_error');  
    } else {
        inputExpiracion.classList.remove('input_error');
    }

    if (pcvv == 'Invalid Date') {
        error = true;
        inputCVV.classList.add('input_error');
    } else {
        inputCVV.classList.remove('input_error');
    }
    if (ptipotarjeta == '') {
        error = true;
        inputTipoTarjeta.classList.add('input_error');
    } else {
        inputTipoTarjeta.classList.remove('input_error');
    }

    return error;
}

let registrar = () => {
    let nombre1 = inputNombre1.value;
    let numTarjeta = inputNumTarjeta.value;
    let expiracion = inputExpiracion.value;
    let cvv = inputCVV.value;
    let tipoTarjeta = inputTipoTarjeta.value;
    let expiracion = new Date(inputExpiracion.value);
    let expiracionFormateada = Number(expiracion.getUTCMonth() + 1) + ' - ' + Number(expiracion.getUTCDate()) + " - " + expiracion.getFullYear();
   


    let error = validar(nombre1, numTarjeta, expiracion, cvv , tipoTarjeta , expiracionFormateada, distrito, pass, telefono, nacimiento, correo, identificacion, nombreComercial, nombreFantasia, );

    if (error == false) {       

        registrarLibreria(nombre1, numTarjeta, expiracion, cvv , tipoTarjeta , expiracionFormateada, distrito, pass, telefono, nacimiento, correo, identificacion, nombreComercial, nombreFantasia,);
        console.log(`Primer Nombre: ${nombre1}`);
        console.log(`Segundo Nombre: ${nombre2}`);
        console.log(`Primer Apellido: ${apellido1}`);
        console.log(`Segundo Apellido: ${apellido2}`);
        console.log(`Identificacion: ${identificacion}`);
        console.log(`Su fecha de nacimiento es:  ${nacimiento}`)
        console.log(`Correo: ${correo}`);
        console.log(`Nombre Comercial: ${nombreComercial}`);
        console.log(`Nombre de Fantasia: ${nombreFantasia}`);
        console.log(`Telefono: ${telefono}`);
        console.log(`Su direeccion es: ${direccion}, ${provincia}, ${canton}, ${distrito}`);
        console.log(`Contrasea: ${pass}`);
        Swal.fire({
            type: 'success',
            title: successMessage,
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible.',

        })
    } else {
        Swal.fire({
            type: 'warning',
            title: errorMessage,
            text: 'Revise los campos resaltados e intentelo de nuevo.',

        })
    }
};

// function validarIdent(identificacion) {
//     var idPatron = /^[0-9]{9}$/;

//     if (identificacion.value = idPatron) {
//         return false;

//     } else {
        
//         return true;

//     }

// }

botonRegistrar.addEventListener('click', registrar);
document.querySelector('body').addEventListener('click', mostarMenuIzquierdo);