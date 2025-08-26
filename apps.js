'use strict'

import produtos from './produtos_atualizados.json' with {type: 'json'}

console.log(produtos)

const produtosCard = document.getElementById('container-produtos')

function criarProdutosCard(produtos){

    const cardProduto = document.createElement('div')
    cardProduto.classList.add('card-produto')

    const imagem = document.createElement('img')
    imagem.src = produtos.imagem
    imagem.alt = produtos.nome

    const nomeProduto = document.createElement('p')
    nomeProduto.classList.add('nome-produto')
    nomeProduto.textContent = produtos.nome

    const precoProduto = document.createElement('span')
    precoProduto.classList.add('preco-produto')
    precoProduto.textContent = `R$ ${produtos.preco.toFixed(2)}`

    const avaliacaoProduto = document.createElement('p')
    avaliacaoProduto.classList.add('avaliacao-produto')
    avaliacaoProduto.textContent = ''

    cardProduto.append(imagem, nomeProduto, precoProduto, avaliacaoProduto)

    produtosCard.append(cardProduto)

    return cardProduto
    
}


const containerProdutos = document.querySelector('.container-produtos')


function carregarProdutos() {

    produtos.forEach(produto => {

        const cardProduto = document.createElement('div')
        cardProduto.classList.add('card-produto')

        const produtoDiv = document.createElement('div')
        produtoDiv.classList.add('produto')

        const imagem = document.createElement('img')
        imagem.src = `./img/${produto.imagem}`
        imagem.alt = produto.nome

        const nomeProduto = document.createElement('p')
        nomeProduto.classList.add('nome-produto')
        nomeProduto.textContent = produto.nome

        const precoProduto = document.createElement('span')
        precoProduto.classList.add('preco-produto')
        precoProduto.textContent = `R$ ${produto.preco.toFixed(2)}`

        const avaliacaoProduto = document.createElement('p')
        avaliacaoProduto.classList.add('avaliacao-produto')
        avaliacaoProduto.textContent = '★★★★★'.substring(0, produto.classificacao) + '☆☆☆☆☆'.substring(produto.classificacao)

        produtoDiv.append(imagem, nomeProduto, precoProduto, avaliacaoProduto)
        cardProduto.append(produtoDiv)
        containerProdutos.append(cardProduto)

    })
    

    }
    
    carregarProdutos()

    