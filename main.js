

function criarCartao(pergunta,resposta){

  let conteudo = document.getElementById("conteudo")
let cartao = document.createElement("article")
cartao.classList= cartao


cartao.innerHTML = `<div class="cartao--conteudo">
                    <div class="cartao--pergunta">
                        </p>Qual a capital da Austrália</p>
                    </div>
                    <div class="cartao--resposta">
                        </p>Sidney</p>
                    </div>
                </div>`

conteudo.appendChild (cartao)


}
criarCartao()

