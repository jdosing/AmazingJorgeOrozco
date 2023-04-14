// let eventosFuturos
// console.log(eventosFuturos)
// let eventosPasados
// console.log(eventosPasados)
// // 
const tbody1= document.getElementById("tbody1")
const tbody3= document.getElementById("tbody3")
let losEventos
// = totalEventos.eventos
const url = `https://mindhub-xj03.onrender.com/api/amazing`
fetch( url )
// console.log(fetch( url ))
    .then(response =>response.json())
    .then (datos=>{
        losEventos=datos.events
        eventosPasados=datos.events.filter(eventopasado=>eventopasado.date<datos.currentDate)
        console.log (eventosPasados)
        eventosFuturos=datos.events.filter(eventopasado=>eventopasado.date>datos.currentDate)
        console.log (eventosFuturos)

        let porcentageAttendence= eventosPasados.map(event=>event.assistance / event.capacity).sort((a,b)=>a-b)   

        let highetsporcentageattendence= eventosPasados.find(event=>event.assistance /event.capacity === porcentageAttendence[17])
        console.log(highetsporcentageattendence)

        let lowestporcentageattendence= eventosPasados.find(event=>event.assistance /event.capacity === porcentageAttendence[0])
        console.log(lowestporcentageattendence);

        let capacities = losEventos.map(event=>event.capacity).sort((a,b)=>a-b)  
        console.log(capacities)
        largercapacity= losEventos.find(event=>event.capacity ==capacities[36])
        console.log(largercapacity);
        console.log(tbody3);
        tabla3(highetsporcentageattendence,lowestporcentageattendence,largercapacity,tbody3)

        const arrayfuturo= [...new Set( eventosFuturos.map(evento=>evento.category))]
        console.log(arrayfuturo,"futuro");
        const arraypasado= [...new Set( eventosPasados.map(evento=>evento.category))]
        console.log(arraypasado,"pasado");

        let fEventscategory=[]
        
        arrayfuturo.forEach(category => {
            fEventscategory.push(eventosFuturos.filter(event=>event.category==category))
        }) // eventos fututos filtrados por categorias

        console.log(fEventscategory,`eventos fututos filtrados por categorias`);

        let pEventscategory=[]

        arraypasado.forEach(category => {
            pEventscategory.push(eventosPasados.filter(event=>event.category==category))
        }) // eventos pasados filtrados por categorias
        
        let arrayObjFuturo = []

            for (categoryEventFuture of fEventscategory){
                let revenue = categoryEventFuture.reduce((acc,acv)=>acc+acv.estimate*acv.price,0)
                let promedioAsistencia = ( categoryEventFuture.reduce((acc,acv)=>acc+(acv.estimate/acv.capacity),0)/categoryEventFuture.length*100).toFixed(2)
                let categoryname = categoryEventFuture[0].category
                    let estadisticaCategoria = {
                        "categoryname":categoryname,
                        "revenue":revenue,
                        "promedioAsistencia":promedioAsistencia
                    }
                    arrayObjFuturo.push(estadisticaCategoria,)
                }
console.log(arrayObjFuturo,`arreglofuturo`);
llenarTabla(arrayObjFuturo,tbody1)


let arrayObjPasado = []

            for (categoryEventPast of pEventscategory){
                let revenue = categoryEventPast.reduce((acc,acv)=>acc+acv.assistance*acv.price,0)
                let promedioAsistencia = ( categoryEventPast.reduce((acc,acv)=>acc+(acv.assistance/acv.capacity),0)/categoryEventPast.length*100).toFixed(2)
                let categoryname = categoryEventPast[0].category
                    let estadisticaCategoria = {
                        "categoryname":categoryname,
                        "revenue":revenue,
                        "promedioAsistencia":promedioAsistencia
                    }
                    arrayObjPasado.push(estadisticaCategoria)
                }
console.log(arrayObjPasado,`arreglopasado`);
llenarTabla(arrayObjPasado,tbody2)
})
.catch (err => console.log(err))


    function llenarTabla(array, contenedor){
        let template= ""
        for (let item of array){
            template +=`
                        <tr>
                            <td>${item.categoryname}</td>
                            <td>$${item.revenue}</td>
                            <td>${item.promedioAsistencia}%</td>
                        </tr>
                `
    }
        contenedor.innerHTML = template
        // console.log(template);
    }
    
    
    function tabla3 (highetsporcentageattendence,lowestporcentageattendence,largercapacity,contenedor){
        let table = `
                        <tr>
                            <td>${highetsporcentageattendence.name} ${highetsporcentageattendence.assistance / highetsporcentageattendence.capacity*100} % </td>
                            <td>${lowestporcentageattendence.name } ${lowestporcentageattendence.assistance / lowestporcentageattendence.capacity*100} %</td>
                            <td>${largercapacity.name } ${largercapacity.capacity}</td>
                        </tr>
        `
        // console.log(contenedor);
        contenedor.innerHTML = table
    }