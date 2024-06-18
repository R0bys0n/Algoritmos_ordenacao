const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0){
    console.log(`nivel de aninhamento : ${nivelAninhamento} `)
    console.log(array)

    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1 );

        array = ordena(parte1, parte2);
    }


    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualparte2 = 0
    const resultado = []

    while(posicaoAtualParte1 < parte1.length && posicaoAtualparte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualparte2 = parte2[posicaoAtualparte2]

        if(produtoAtualParte1.preco < produtoAtualparte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            resultado.push(produtoAtualparte2)
            posicaoAtualparte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length 
        ? parte1.slice(posicaoAtualParte1) 
        : parte2.slice(posicaoAtualparte2))
}

console.log(mergeSort(listaLivros));