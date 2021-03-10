function solucao(precos) {
    // seu código aqui
    let teste = [];

    let perda1, perda2, perdaMinima;

    for (let j = 0; j < precos.length; j++) {
        perda1 = precos[0] - precos[j + 1];
        perda2 = precos[1] - precos[j + 1];

        teste.push(perda1, perda2);
    }

    function numerosPositivos(valor) {
        return valor > 0;
    }

    let arrayFiltrado = teste.filter(numerosPositivos)

    perdaMinima = arrayFiltrado[0];
    for (let x = 0; x < arrayFiltrado.length; x++) {
        if (perdaMinima > arrayFiltrado[x]) {
            perdaMinima = arrayFiltrado[x];
        }
    }

    console.log(perdaMinima);
}