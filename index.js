const productsCart = [
    {
        id: 2,
        name: "Vodka Absolut 1l",
        price: 119.90.toFixed(2)
    },
    {
        id: 3,
        name: "Whisky Jack Daniels 1l",
        price: 158.70.toFixed(2)
    },
    {
        id: 4,
        name: "Vodka Grey Goose 750ml",
        price: 175.99.toFixed(2)
    },
    {
        id: 5,
        name: "Jägermeister 750ml",
        price: 109.87.toFixed(2)
    },
    {
        id: 6,
        name: "Whisky The Macallan 12 anos 700ml",
        price: 740.90.toFixed(2)
    },
]

const header = document.createElement("header")
header.id = "menu_cabecalho"
document.querySelector("body").appendChild(header)

let title_head = document.createElement("h1")
title_head.id = "titulo_cabecalho"
title_head.innerText = "Virtual Makert"
document.querySelector("#menu_cabecalho").appendChild(title_head)

const main = document.createElement("main")
main.id = "main_container"
document.querySelector("body").appendChild(main)

const ul = document.createElement("ul")
ul.id = "ul_cart"
document.querySelector("#main_container").appendChild(ul)

let span_topList = document.createElement("span")
let nomeItem     = document.createElement("p")
let nomeValor    = document.createElement("p")

span_topList.className = "span_list"
nomeItem.innerText     = "Item"
nomeValor.innerText    = "Valor"

span_topList.appendChild(nomeItem)
span_topList.appendChild(nomeValor)
ul.appendChild(span_topList)

function criarLi(lista){

    for(let i = 0; i < lista.length; i++){

        let tagLi  = document.createElement("li")
        let pName  = document.createElement("p")
        let pPrice = document.createElement("p")

        tagLi.className  = "lista"
        pName.innerText  = `${lista[i].name}`
        pPrice.innerText = `R$ ${lista[i].price}`

        tagLi.appendChild(pName)
        tagLi.appendChild(pPrice)
        document.querySelector("#ul_cart").appendChild(tagLi)
    

    }

}
criarLi(productsCart)

const section_footer = document.createElement("section")
section_footer.id = "sessao_footer"

function calcularTotal(lista){

    let soma = 0

    for(let i = 0; i < lista.length;i++){

        soma += parseFloat(lista[i].price)      
   
    }

    let spanSoma = document.createElement("span")
    let pTotal   = document.createElement("p")
    let pResult  = document.createElement("p")

    spanSoma.className = "span_total"
    pTotal.innerText   = "Total"
    pResult.innerText  = `R$ ${soma.toFixed(2)}`

    spanSoma.appendChild(pTotal)
    spanSoma.appendChild(pResult)
    section_footer.appendChild(spanSoma)
    
    return soma

}

calcularTotal(productsCart)

document.querySelector("#main_container").appendChild(section_footer)

const buttonFinalizar     = document.createElement("button")
buttonFinalizar.className = "button_finish"
buttonFinalizar.innerText = "Finalizar compra"
buttonFinalizar.type      = "submit"

document.querySelector("#sessao_footer").appendChild(buttonFinalizar)






