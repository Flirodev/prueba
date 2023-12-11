const importar = require("./collectibles.js");

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

const collectibles = {
    figuras: [...hotToys, ...bandai, ...starWars],

    listFigures: function () {
        console.log("Todas las figuras:");
        this.figuras.forEach((figura) => {
            console.log(figura);
        });
    },

    figuresByBrand: function (marca) {
        const figurasFiltradas = this.figuras.filter((figura) => figura.marca === marca);
        console.log("Figuras de la marca marca" + marca, figurasFiltradas);
    },
};

collectibles.listFigures();
collectibles.figuresByBrand("Bandai");
