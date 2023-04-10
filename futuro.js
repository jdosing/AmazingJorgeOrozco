const $contenedor= document.getElementById(`contenedorCards`)
const losEventos= totalEventos.eventos


const eventofuturo = totalEventos.eventos.filter(futuro=>futuro.date>totalEventos.fechaActual)

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
rendertarjetas (eventofuturo,$contenedor)


function crearCards( cartaEvento ){
    return `
    <article class="card border-primary col-10 col-md-3 col-xl-3">
        <img class="p-2" src="${cartaEvento.image}" alt="..." id="imgarticle">
        <div class="card-body  ">
            <h4 class="card-title">${cartaEvento.name}</h4>
            <p class="card-text">${cartaEvento.description}</p>
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

const categorias = eventofuturo.map(evento=>evento.category)

const setcategorias = new Set (categorias)

const arraycategorias = Array.from(setcategorias)
imprimircategorias(arraycategorias,$contenedorcheck)

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

// ___________________________________________________

let contselect=[]
$contenedorcheck.addEventListener(`change`,()=>{
    contselect=document.querySelectorAll(`input[type="checkbox"]:checked`)
    contselect=Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`))
    nuevosele =contselect.map(input=>input.value)
    rendertarjetas(filtrocruzado(eventofuturo,nuevosele,$barbusqueda.value),$contenedor)
    // rendertarjetas(filtrarcategoria(losEventos,nuevosele),$contenedor)

})
$barbusqueda.addEventListener(`input`,()=>{
    rendertarjetas(filtrocruzado(eventofuturo,nuevosele,$barbusqueda.value),$contenedor)
    // rendertarjetas(filtrobuscador(losEventos,$barbusqueda.value),$contenedor)
})
function filtrarcategoria (eventos,categorias){
        if (categorias.length==0){
            return eventos
        }
    return aux = eventos.filter(evento=>categorias.includes(evento.category))

}
function filtrobuscador (eventos, texto){
    return eventos.filter(evento=>evento.category.toLowerCase().includes(texto.toLowerCase())||evento.name.toLowerCase().includes(texto.toLowerCase()))
}
function filtrocruzado (eventos, categorias, texto){
    const filcategoria= filtrarcategoria(eventos,categorias)
    const filtroporbuscador=filtrobuscador(filcategoria,texto)
    return filtroporbuscador
}


