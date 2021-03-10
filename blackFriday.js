function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
    const arr = [];

    for (let i = 0; i < produtos.length; i++) {
        let listaProdutos = produtos[i];

        if (listaProdutos.valor <= valorMaximo && listaProdutos.avaliacao >= avaliacaoMinima) {
            arr.push(listaProdutos);
        }
    }
    console.log(arr);

}