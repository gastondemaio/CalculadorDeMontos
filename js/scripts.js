const clickButton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
    btn.addEventListener('click', () =>{
        Toastify({
            text: "Producto añadido con exito",
            duration: 3000
        }).showToast();
    })
})



function addToCarritoItem(e){

    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}   

function addItemCarrito(newItem){

    const inputElemento = tbody.getElementsByClassName('input__element')
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
           carrito[i].cantidad ++;
           const inputValue = inputElemento[i]
           inputValue.value++;
           CarritoTotal()
           return null;
        }
    }
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content =  `
        <th scope="row">1</th>
                    <td class="table__productos">
                        <img src=${item.img} alt="">
                        <h6 class="title">${item.title}</h6>
                    </td>
                    <td class=${item.precio}><p>$5</p></td>
                    <td class="table__cantidad">
                        <input type="number" min="1" value=${item.cantidad} class="input__element">
                        <button class="delete btn btn-danger">x</button>
                    </td>
        
        `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector('.delete').addEventListener('click', removeItemCarrito)
        tr.querySelector('.input__element').addEventListener('change', sumaCantidad)
    })
    CarritoTotal()  
}

function CarritoTotal(){
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio * item.cantidad
    })
    itemCartTotal.innerHTML = `Total $${total}`
    addLocalStorage
}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }

    tr.addEventListener('click', () =>{
        Toastify({
            text: "Producto removido con exito",
            duration: 3000
        }).showToast();
    })

    tr.remove()
    CarritoTotal()
    addLocalStorage()
}

function sumaCantidad(e){
    const sumaInput  = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
      if(item.title.trim() === title){
        sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
        item.cantidad = sumaInput.value;
        CarritoTotal()
      }
    })
    addLocalStorage()
  }

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}

const lista = document.querySelector('#listado')

fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <h5>${producto.nombre}</h5>
            <p>${producto.descripcion}</p>
            <h5>${producto.precio}</h5>
            `
            lista.append(div)
        })
    })

console.log(lista)
