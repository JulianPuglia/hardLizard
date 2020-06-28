const fs = require('fs')

let sucursales = {
    bd: './data/theaters.json',
    titulo: "Nuestras Salas",
    leerJSON: function() {
        let sucursalesJson = fs.readFileSync(this.bd, 'utf-8');
        let sucursales = JSON.parse(sucursalesJson);
        return sucursales
    },
    cantidad: function(){
        return this.leerJSON().total_theaters
    },
    listadoSucursales: function(){
        let theaters = this.leerJSON()
        return theaters.theaters
    }
}
module.exports = sucursales