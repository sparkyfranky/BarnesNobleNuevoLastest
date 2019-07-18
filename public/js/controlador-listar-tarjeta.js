'use strict';

const tbody = document.querySelector('#tbl_tarjetas tbody');
let listaTarjetas = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_tabla = async() => {

    listaTarjetas = await obtenerTarjetas();
    tbody.innerHTML = '';


    for (let i = 0; i < listaTarjetas.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = listaTarjetas[i]['Nombre'];
        fila.insertCell().innerHTML = listaTarjetas[i]['Tipo de Tarjeta'];
        fila.insertCell().innerHTML = listaTarjetas[i]['Numero de Tarjeta'];
        fila.insertCell().innerHTML = listaTarjetas[i]['Expiration'];
        fila.insertCell().innerHTML = listaTarjetas[i]['Codigo CVV'];
    }


};

let filtrar_tabla = async() => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < listaTarjetas.length; i++) {
        if (listaTarjetas[i]['nombre'].toLowerCase().includes(filtro) || listaTarjetas[i]['correo'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = listaTarjetas[i]['Nombre'];
            fila.insertCell().innerHTML = listaTarjetas[i]['Tipo de Tarjeta'];
            fila.insertCell().innerHTML = listaTarjetas[i]['Numero de Tarjeta'];
            fila.insertCell().innerHTML = listaTarjetas[i]['Expiration'];
            fila.insertCell().innerHTML = listaTarjetas[i]['Codigo CVV'];
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);