function solucao(jogadas) {
    //seu código aqui 
    let time1 = [];
    let time0 = [];

    for (let i = 0; i < jogadas.length; i++) {
        if (jogadas[i] === 1) {
            time1.push(jogadas[i]);
        } else {
            time0.push(jogadas[i]);
        }
    }

    if (time1.length === time0.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}