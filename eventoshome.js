// {/* <article class="card border-primary col-10 col-md-3 col-xl-4">
//     <img src="../images/Cine7.jpg" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h4 class="card-title">Card title</h4>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
// </article>  */}

// / `
// //         <article class="card border-primary col-10 col-md-3 col-xl-4">
// //             <img class="p-2 " src="${cartaEvento.image}" alt="...">
// //             <div class="card-body">
// //                 <h4 class="card-title">${cartaEvento.name}</h4>
// //                 <p class="card-text">${cartaEvento.description}</p>
// //                 <p class="col-4">Prices: $${cartaEvento.price}</p>
// //                 <a href="./assets/pages/detail.html" class=" col-5 btn btn-warning">Detail</a>
// //             </div>
// //         </article>
// // `
// //  

const $contenedor= document.getElementById(`contenedorCards`)
const losEventos= totalEventos.eventos

const cartaEvento = losEventos[0]


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
rendertarjetas (losEventos,$contenedor)

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
                <a href="./assets/pages/detail.html?name=${cartaEvento.name}" class="col-4 rows-1 btn btn-warning">Detail</a>
            </footer>            
    </article>
`
}



const $=id=> document.getElementById(id)

let $contenedorcheck=$(`contenedorcheck`)
let $barbusqueda=$(`barbusqueda`)

const categorias = losEventos.map(evento=>evento.category)

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
let contselect=[]


$contenedorcheck.addEventListener(`change`,()=>{
    contselect=document.querySelectorAll(`input[type="checkbox"]:checked`)
    contselect=Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`))
    nuevosele =contselect.map(input=>input.value)
    rendertarjetas(filtrocruzado(losEventos,nuevosele,$barbusqueda.value),$contenedor)
    // rendertarjetas(filtrarcategoria(losEventos,nuevosele),$contenedor)

})
$barbusqueda.addEventListener(`input`,()=>{
    rendertarjetas(filtrocruzado(losEventos,nuevosele,$barbusqueda.value),$contenedor)
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

// let $checkbox2=$(`checkbox1`)
// let $checkbox1=$(`checkbox2`)
// let $checkbox3=$(`checkbox3`)
// let $checkbox4=$(`checkbox4`)
// let $checkbox5=$(`checkbox5`)
// let $checkbox6=$(`checkbox6`)
// let $checkbox7=$(`checkbox7`)




{/* <div class=" form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox1" value="option1">
<label class="form-check-label" for="inlineCheckbox1">Food Fair</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox2" value="option2">
<label class="form-check-label" for="inlineCheckbox2">Museum</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox3" value="option3">
<label class="form-check-label" for="inlineCheckbox3">Costume Party</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox4" value="option4">
<label class="form-check-label" for="inlineCheckbox4">Music Concert</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox5" value="option5">
<label class="form-check-label" for="inlineCheckbox5">Race</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox6" value="option6">
<label class="form-check-label" for="inlineCheckbox6">Book Exchange</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="checkbox7" value="option7">
<label class="form-check-label" for="inlineCheckbox7">Let's go to the cinema</label>
</div>         */}