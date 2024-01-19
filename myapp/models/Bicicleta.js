let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function (id) {

    const index = Bicicleta.allBicis.findIndex(bici => bici.id === id);
    if (index !== -1) {
        bicicletas.splice(index, 1);
    }
}

Bicicleta.updateById = function (id, newColor, newModelo, newUbicacion) {
    const bici = this.allBicis.find(bici => bici.id === id);
    if (bici) {
        // Actualizar propiedades si se encuentran si no se usan las antigüas
        bici.color = newColor || bici.color;
        bici.modelo = newModelo || bici.modelo;
        bici.ubicacion = newUbicacion || bici.ubicacion;
    }
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
