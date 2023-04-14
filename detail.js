const $contenedor= document.getElementById(`contenedorCards`)
let eventoEncontrado 
let losEventos
// = totalEventos.eventos
const url = `https://mindhub-xj03.onrender.com/api/amazing`
fetch( url )
// console.log(fetch( url ))
    .then(response =>response.json())
    .then (datos=>{
        losEventos=datos.events
        console.log (losEventos)
        eventoEncontrado = losEventos.find(events=>events.name===nameCarta)
        console.log(eventoEncontrado)
        crearCards(eventoEncontrado)
    })
    .catch (err => console.log(err))

console.log([document])
let urlCarta = location.search
console.log(urlCarta)
let parametros = new URLSearchParams(urlCarta)
// console.log(parametros)
let nameCarta= parametros.get("name")
// console.log(nameCarta)


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
