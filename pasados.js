const $contenedor= document.getElementById(`contenedorCards`)
// const losEventos= totalEventos.eventos

let eventosPasados

const url = `https://mindhub-xj03.onrender.com/api/amazing`
fetch( url )
// console.log(fetch( url ))
    .then(response =>response.json())
    .then (datos=>{
        eventosPasados=datos.events.filter(eventopasado=>eventopasado.date<datos.currentDate)
        console.log (eventosPasados)
        rendertarjetas (eventosPasados,$contenedor)
        const arraycategorias =  [...new Set (eventosPasados.map(evento=>evento.category))]
        imprimircategorias(arraycategorias,$contenedorcheck)
    })
    .catch (err => console.log(err))

function rendertarjetas (eventos, contenedor){
    let template=``
    for (let cartaEvento of eventos){
        template += crearCards(cartaEvento)
    } if (template===""){
        contenedor.innerHTML="<h2><b>`No items to display`</b></h2>"
    } else {
        contenedor.innerHTML=template
    }
    
}

function crearCards( cartaEvento ){
    return `
    <article class="card border-primary col-10 col-md-3 col-xl-3">
        <img class="p-2" src="${cartaEvento.image}" alt="..." id="imgarticle">
        <div class="card-body  ">
            <h4 class="card-title">${cartaEvento.name}</h4>
            <p class="card-text">${cartaEvento.description}</p>
            <p>Fecha: ${cartaEvento.date}</p>
        </div>
            <footer class="botonera" >
                <p class="col-5">Prices: $${cartaEvento.price}</p>
                <a href="/assets/pages/detail.html?name=${cartaEvento.name}" class="col-4 rows-1 btn btn-warning">Detail</a>
            </footer>            
    </article>
`
}

const $=id=> document.getElementById(id)

let $contenedorcheck=$(`contenedorcheck`)
let $barbusqueda=$(`barbusqueda`)


function imprimircategorias (categorias, contenedor){
    let template= ""
    for (let categoria of categorias){
        template += `<div class=" form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="${categoria}">
        <label class="form-check-label" >${categoria}</label>
        </div>`
    }
    contenedor.innerHTML+=template
}

let contselect=[]

$contenedorcheck.addEventListener(`change`,()=>{
    contselect=document.querySelectorAll(`input[type="checkbox"]:checked`)
    contselect=Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`))
    let nuevosele =contselect.map(input=>input.value)
    rendertarjetas(filtrocruzado(eventosPasados,nuevosele,$barbusqueda.value),$contenedor)
    // rendertarjetas(filtrarcategoria(losEventos,nuevosele),$contenedor)

})
$barbusqueda.addEventListener(`input`,()=>{
    contselect=document.querySelectorAll(`input[type="checkbox"]:checked`)
    contselect=Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`))
    let nuevosele =contselect.map(input=>input.value)
    rendertarjetas(filtrocruzado(eventosPasados,nuevosele,$barbusqueda.value),$contenedor)
    // rendertarjetas(filtrobuscador(losEventos,$barbusqueda.value),$contenedor)
})

function filtrarcategoria (eventos,categorias){
        if (categorias.length==0){
            return eventos
        }
    return eventos.filter(evento=>categorias.includes(evento.category))

}
function filtrobuscador (eventos, texto){
    return eventos.filter(evento=>evento.category.toLowerCase().includes(texto.toLowerCase())||evento.name.toLowerCase().includes(texto.toLowerCase()))
}
function filtrocruzado (eventos, categorias, texto){
    const filcategoria= filtrarcategoria(eventos,categorias)
    const filtroporbuscador=filtrobuscador(filcategoria,texto)
    return filtroporbuscador
}

// const eventopasado = totalEventos.eventos.filter(pasado=>pasado.date<totalEventos.fechaActual)
// const categorias = eventopasado.map(evento=>evento.category)

// const setcategorias = new Set (categorias)

// const arraycategorias = Array.from(setcategorias)
// imprimircategorias(arraycategorias,$contenedorcheck)
