const $contenedor= document.getElementById(`contenedorCards`)
const losEventos= totalEventos.eventos

// console.log([document])
let urlCarta = location.search
// console.log(urlCarta)
let parametros = new URLSearchParams(urlCarta)
// console.log(parametros)
let nameCarta= parametros.get("name")
// console.log(nameCarta)

let eventoEncontrado = losEventos.find(evento=>evento.name==nameCarta)
console.log(eventoEncontrado)

// 

function crearCards( evento ){
    let template=``
    template = `
    <div class="row p-5 d-flex " style="background-color: rgb(242, 225, 155);">
                    <div class="col-10 col-md-6" >
                    <img class="img-fluid " id="imgarticles" src="${evento.image}" alt="..." >
                    </div>
                    <div class="col-6 d-flex justify-content-center col-md-6 d-flex justify-content-center" id="nuevo">
                    <h4 class="card-title">${evento.name}</h4>
                        <p><b>Fecha: </b>${evento.date}</p>
                        <p>${evento.description}</p>   
                        <p><b>Category: </b>${evento.category}
                        <p><b>Place: </b>${evento.place}
                        <p><b>Capacity: </b>${evento.capacity}
                        <p><b>Price: </b>$${evento.price}
                    </div>
                </div>

    
`

$contenedor.innerHTML=template

}

    crearCards(eventoEncontrado)
    















// function rendertarjetas (eventos, contenedor){
//     let template=``
//     for (let cartaEvento of eventos){
//         template = crearCards(cartaEvento)
//     } if (template===""){
//         contenedor.innerHTML="<h2>Sin elementos para mostrar</h2>"
//     } else {
//         contenedor.innerHTML=template
//     }
    
// }
// rendertarjetas (losEventos,$contenedor)

// function crearCards( cartaEvento ){
//     return `

//     <div class="row p-5" style="background-color: rgb(242, 225, 155);">
//     <div class="col-7">
//        <img class="img-fluid "  src="${cartaEvento.image}" alt="..." id="imgarticle">
//     </div>
//     <div class="col-5 d-flex justify-content-center " id="nuevo">
//     <h4 class="card-title">${cartaEvento.name}</h4>
//         <p>Fecha: ${cartaEvento.date}</p>
//         <p>${cartaEvento.description}</p>   
//         <p>Category: ${cartaEvento.category}
//         <p>Place: ${cartaEvento.place}
//         <p>Capacity: ${cartaEvento.capacity}
//         <p>Price: $${cartaEvento.price}
//     </div>
// </div>
// `
// }
