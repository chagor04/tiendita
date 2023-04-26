const carrusel=document.querySelector('.carrusel111')
const tarjetas=document.querySelector('.tarjetas')
let indice=0

let fotos=[
    "../img/foto1.jpeg",
    "../img/foto2.png",
    "../img/foto3.jpg",
]

setInterval(()=>{
    if(indice<fotos.length){
        carrusel.src=fotos[indice]
        indice++
    }else{
        indice=0
    }
},2000);


const url="https://fakestoreapi.com/products"

async function traer (){
    let elementos=null
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    console.log(datos)
    
    datos.forEach(item => {
        tarjetas.innerHTML+=`<div class="tarjetas">
        <div class="card">
        <h3 class="card_title">${item.title}</h3>
        <div class="card_image">
        <img src="${item.image}">
        </div>
            <p class="card_description">${item.description} </p>
            <p class="card_price">${item.price}</p>
            <button class="btn btn_ayuda"> comprar </button>
            </div>
            </div>
            `
        });
        let seleccionado=null
        const cerrar=document.querySelector('.modal_close')
        const ventanaModal=document.querySelector('.ventana_modal')
        cerrar.addEventListener('click', cerrar_modal)
    function cerrar_modal(){
        ventanaModal.style.display='none'
    }
    tarjetas.addEventListener('click',(evento)=>{
        if(evento.target.classList.contains('btn')){
            seleccionado= elementos.filter(tarjeta=>tarjeta.title==evento.target.parentElement.parentElement.querySelector('.card_title').textContent)
            console.log(seleccionado)
            ventanaModal.style.display="flex"
            const modal_body=document.querySelector('.modal_contenido')
            modal_body.innerHTML=`<div class="tarjetas">
            <div class="card">
            <h3 class="card_title">${seleccionado[0].title}</h3>
            <div class="card_image">
            <img src="${seleccionado[0].image}">
            </div>
            <p class="card_description">${seleccionado[0].description} </p>
            <p class="card_price">${seleccionado[0].price}</p>
                <div class="card_boton">
                <button class="btn btn_ayuda btn_cancelar"> cerrar </button>
                <button class="btn btn_ayuda btn_comprar " > comprar </button>
                </div>
            </div>
            </div>
            `
        }
    })
    ventanaModal.addEventListener('click',(evento)=>{
        if(evento.target.classList.contains('btn_cancelar')){
            cerrar_modal()
        }else if(evento.target.classList.contains('btn_comprar')){
            if(confirm(`Seguro que desea comprarlo ${seleccionado[0].title}`)==true){
                localStorage.setItem('producto',JSON.stringify(seleccionado))
            }
        }
    })
}

traer()