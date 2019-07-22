'use strict';

const tbody = document.querySelector('#tbl_tarjetas tbody');
let listaTarjetas = [];
let txtFiltro = document.querySelector('#txt-filtro');

let mostrar_tabla = async() => {

    listaTarjetas = await obtenerTarjetas();
    tbody.innerHTML = '';
    
    for (let i = 0; i < listaTarjetas.length; i++) {
  
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = listaTarjetas[i]['nombre1'];
        fila.insertCell().innerHTML = listaTarjetas[i]['numTarjeta'];
        fila.insertCell().innerHTML = listaTarjetas[i]['tipoTarjeta'];
        fila.insertCell().innerHTML = listaTarjetas[i]['expiracionMM'];
        fila.insertCell().innerHTML = listaTarjetas[i]['expiracionYY'];
        fila.insertCell().innerHTML = listaTarjetas[i]['cvv'];
    }
};

mostrar_tabla();

let filtrar_tabla = async() => {

    let filtro = txtFiltro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < listaTarjetas.length; i++) {   

        if (listaTarjetas[i]['nombre1'].toLowerCase().includes(filtro) || listaTarjetas[i]['tipoTarjeta'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = listaTarjetas[i]['nombre1'];
            fila.insertCell().innerHTML = listaTarjetas[i]['tipoTarjeta'];
            fila.insertCell().innerHTML = listaTarjetas[i]['numTarjeta'];
            fila.insertCell().innerHTML = listaTarjetas[i]['expiracionMM'];
            fila.insertCell().innerHTML = listaTarjetas[i]['expiracionYY'];
            fila.insertCell().innerHTML = listaTarjetas[i]['cvv'];
        }

    }


};

txtFiltro.addEventListener('keyup', filtrar_tabla);



