'use strict'

import produtos from './produtos_atualizados.json' with {type: 'json'}

console.log(produtos)

const produtosCard = document.getElementById('container-produtos')

function criarProdutosCard(produto){

    const cardProduto = document.createElement('div')
    cardProduto.classList.add('card-produto')
    cardProduto.addEventListener('onclick', () => {




    }



    )}