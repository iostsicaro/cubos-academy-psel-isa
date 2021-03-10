function solucao(stringCorrompida) {
    // seu código aqui
    let stringPurificada;

    stringCorrompida = stringCorrompida.replace(/[!@#$%&*()]/g, '');
    stringPurificada = stringCorrompida;

    console.log(stringPurificada);
}