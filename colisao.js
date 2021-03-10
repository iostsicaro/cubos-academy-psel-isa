function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui

    distancia = (- velocidade * velocidade) / (2 * aceleracao)

    if (distancia === distanciaObjeto) {
        console.log("NAO ACELERE");
    } else if (distancia > distanciaObjeto) {
        console.log("COLISAO A FRENTE")
    } else {
        console.log("CAMINHO SEGURO")
    }
}