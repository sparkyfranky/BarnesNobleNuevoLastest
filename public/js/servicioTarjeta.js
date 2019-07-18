let registrarTarjeta = (pnombre1, ptipoTarjeta, pnumTarjeta, pexpiracion, pcvv ) => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrarTarjeta',
        responseType: 'json',
        data: {
            nombre1: pnombre1,
            tipoTarjeta: ptipoTarjeta,
            numTarjeta: pnumTarjeta,
            expiracion: pexpiracion,
            cvv: pcvv
            
        }
    });
};


let obtenerTarjetas  = async () => {
    try{ 
        //Fetch data from an url endpoint:
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listarTarjetas',  
            responseType: 'json'   
        });
        const result = await response;
        return result.data.listaTarjetas;
    }catch (error){
        console.log(error);
    } 
};


// var obtenerTarjeta = async () => {
//     var response = await fetch('http://localhost:4000/api/listarTarjetas', {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//         }
//     });
    
//     return result.listaTarjetas;
// }






// var registrarTarjeta = async (pnombre1, pnumTarjeta, pexpiracion, pcvv, ptipoTarjeta ) => {
//     var response = await fetch('http://localhost:4000/api/registrarTarjetas', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//         body:JSON.stringify(pnombre1, pnumTarjeta, pexpiracion, pcvv, ptipoTarjeta )
//     });
//     var result = await response.json();
//     return result;
// }



// var editarGenero = async(tarjeta,id) => {
//     var response = await fetch('http://localhost:4000/api/editar/' + id, {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//         body:JSON.stringify(tarjeta)
//     });
//     var result = await response.json();
//     return result;
// }

// var eliminarTarjeta = async(id) => {
//     var response = await fetch('http://localhost:4000/api/eliminar/' + id, {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//     });
//     var result = await response.json();
//     return result;
// }

// var estadoGenero = async(genero,id) => {
//     var response = await fetch('http://localhost:4000/api/genero/modificarEstado/' + id, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//         },
//         body:JSON.stringify(genero)
//     });
//     var result = await response.json();
//     return result.response;
// }