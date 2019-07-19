'use strict'

const express = require('express'),
    router = express.Router(),//permite crear la ruta
    Tarjeta = require('../models/tarjeta.model');

//Definir la ruta para registar contactos
//empizan con / por estandar
//- en el medio por standar
router.post('/registrarTarjeta', function (req, res) {
    /*req lo que recibo y response lo que respondo */
    let body = req.body; 
    let nuevaTarjeta =  new Tarjeta({
        // /Datos de Tarejeta/
        
        nombre1 : body.nombre1,
        numTarjeta : body.numTarjeta,
        expiracion : body.expiracion,
        cvv : body.cvv,
        tipoTarjeta : body.tipoTarjeta,
    });

    nuevaTarjeta.save(
        function(err, tarjetaDB){
            if(err){
                return res.status(400).json({
                    success: false,
                    msj: 'La tarjeta no se pudo guardar',
                    err
                });
            }else{
                return res.json({
                    success: true,
                    msj: 'La tajeta se guardó con éxito'
                })
            }
        }
    );
});

router.get('/listarTarjetas', function (req, res) {
    Tarjeta.find(function (err, tarjetasDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las tarjetas',
                err
            });
        } else {
            return res.json({
                success: true,
                listaTarjetas: tarjetasDB
            })
        }
    });
});
 
module.exports = router;

//localhosta:3000/api/registrarUsuario/
//localhosta:3000/api/registrarTarjeta/

  // nuevoUsuario.save(   
    //     function (err, usuarioDB) {
    //         if (err)
    //             res.status(400).json({
    //                 success: true,
    //                 msj: 'El usario no se guardó con éxito' 
    //             });



                
                
            //Obtiene y devuelve todas las personas tras crear una de ellas
    //         Usario.find(function (err, conct) {
    //             if (err)
    //                 res.send(err)
    //             res.json(conct);
    //         })
    //     }
    // );
