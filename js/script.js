let buttons = document.querySelectorAll('button.type, button.color')
let types = document.querySelectorAll('.type')
let masks = document.querySelectorAll('.mask')
let colors = document.querySelectorAll('.color')


function select(typeOfButton, classType, element) {
  typeOfButton.forEach(function (type) {
    if (type.classList.contains(classType)) {
      type.classList.remove(classType)
    }
    element.target.classList.add(classType)
  })
}

buttons.forEach(button =>
  button.addEventListener('click', function (e) {
    masks.forEach(function (mask) {
      if (e.target.id == 'all') {
        colors.forEach(function (color) {
          if (color.classList.contains('hidden')) {
            color.classList.remove('hidden')
          }
        })
        if (mask.parentNode.classList.contains('hidden')) {
        mask.parentNode.classList.remove('hidden')
        }
      } else if (!mask.classList.contains(e.target.id)) {
        mask.parentNode.classList.add('hidden')

      } else {
        mask.parentNode.classList.remove('hidden')
      }
    })

    if (e.target.classList.contains('color')) {
      select(colors, 'selected-color', e)
    } else {
      colors.forEach(function (color) {
        if (color.classList.contains('selected-color')) {
          color.classList.remove('selected-color')
        }
      })
    }

    if (e.target.classList.contains('type')) {
      select(types, 'selected-type', e)
    }

    if (e.target.id != 'all' && !e.target.classList.contains('color')) {
      colors.forEach(function (color) {
        if (!color.classList.contains(e.target.id)) {
          color.classList.add('hidden')
        } else {
          color.classList.remove('hidden')
        }
      })
    }
  })
)

// Cart
var carts = document.querySelectorAll('.cart')
var masksOnCart = document.querySelectorAll('.mask-on-cart')
let maskAlreadyOnCart = false
let customerCart = document.querySelector('#customerCart')
let oneMaskCartImage = document.querySelector('#oneMaskCartImage')

carts.forEach(function (cart) {
  cart.addEventListener('click', function (cart) {
    oneMaskCart.style.display = 'block'
    var maskComingInCart = document.createElement('img')
    maskComingInCart.src = cart.target.parentNode.children[0].src
    oneMaskCartImage.src = cart.target.parentNode.children[0].src
    maskComingInCart.classList.add('mask-on-cart')
    
    document.querySelectorAll('.mask-on-cart').forEach(function (maskOnCart) {
      if (maskComingInCart.src == maskOnCart.src) {
        maskOnCart.parentNode.querySelector('.number').innerHTML = parseInt(maskOnCart.parentNode.querySelector('.number').innerHTML) + 1
        maskOnCart.parentNode.querySelector('.price').innerHTML = parseInt(maskOnCart.parentNode.querySelector('.price').innerHTML) + 6
        sum()
        maskAlreadyOnCart = true
      }
    })
    if (!maskAlreadyOnCart || document.getElementsByClassName('mask-on-cart').length == 0) {
      customerCart.insertAdjacentHTML('beforeend', '<div class="cart-item-container"></div>')
      customerCart.lastChild.appendChild(maskComingInCart)
      customerCart.lastChild.insertAdjacentHTML('beforeend', '<div><div class="operations"><span class="number-items">x<span class="number">1</span></span><button class="operation">-</button> <button class="operation">+</button><i class="delete-item fa fa-trash" aria-hidden="true"></i></div><div><span class="price">6</span>&euro;</div></div>')
      customerCart.childNodes[1].innerHTML = " "
      document.getElementById('buy-cart').classList.remove('hidden')
      sum()
    }
    maskAlreadyOnCart = false
  })
})


function sum() {
  var newSum = 0
  document.querySelectorAll('.price').forEach(function(e){
    newSum += parseInt(e.innerHTML)
  })
  if (newSum == 0) {
    document.querySelector('#buy-cart').classList.add('hidden')
    customerCart.childNodes[1].innerHTML = "Vous n'avez aucun masque dans votre panier"
  } else {
  document.getElementById('total-price').innerHTML = `${newSum}`
  }
}

document.addEventListener('click', function(e){
  if (e.target && e.target.classList.contains('operation')){
    if (e.target.innerHTML == '-') {
      e.target.parentNode.querySelector('.number').innerHTML = parseInt(e.target.parentNode.querySelector('.number').innerHTML) - 1
      e.target.parentNode.parentNode.querySelector('.price').innerHTML = parseInt(e.target.parentNode.parentNode.querySelector('.price').innerHTML) - 6
      
      if (e.target.parentNode.querySelector('.number').innerHTML == 0) {
        e.target.parentNode.parentNode.parentNode.remove()
       
        cartEmpty()
      }
    } else {
      e.target.parentNode.querySelector('.number').innerHTML = parseInt(e.target.parentNode.querySelector('.number').innerHTML) + 1
      e.target.parentNode.parentNode.querySelector('.price').innerHTML = parseInt(e.target.parentNode.parentNode.querySelector('.price').innerHTML) + 6
    }
  sum()
  }
})

document.addEventListener('click', function(e){
  if (e.target && e.target.classList.contains('delete-item')){
    e.target.parentNode.parentNode.parentNode.remove()
    sum()
    cartEmpty()
  }
})

function cartEmpty(){
  if(customerCart.childNodes.length == 3){
    customerCart.childNodes[1].innerHTML = "Vous n'avez aucun masque dans votre panier"
  }  
}

document.addEventListener('click', function(e){
  if (e.target && e.target.id == 'buy') {
    alert('Ce site ne propose pas réellement de masques !')
  }
})

// Modal

var modalImage = document.querySelector('#modalImage')
var modalBtn = document.querySelector('#modalBtn')
var closeBtns = document.querySelectorAll('.closeBtn')
var imageModal = document.querySelector('#imageModal')
var modalCart = document.querySelector('#modalCart')

masks.forEach(function (mask) {
  mask.addEventListener('click', function (mask) {
    modalImage.style.display = 'block'
    imageModal.src = mask.target.attributes.src.value
  })
})

closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener('click', closeModal)
})
window.addEventListener('click', clickOutside)

function closeModal(e) {
  e.target.parentNode.parentNode.style.display = 'none'
}

function clickOutside(e) {
  if (e.target == modalImage) {
    modalImage.style.display = 'none'
  }
  if (e.target == modalCart){
    modalCart.style.display = 'none'
  } if (e.target == oneMaskCart || e.target.classList.contains('see-cart')) {
    oneMaskCart.style.display = 'none'
  }
}

// Modal Continue Cart 

let oneMaskCart = document.querySelector('#oneMaskCart')
let continueCart = document.querySelector('#continue')

continueCart.addEventListener('click', function(){
  oneMaskCart.style.display = 'none'
})


// Dropdown toggle

var seeCartButtons = document.querySelectorAll('.see-cart')
var modalCart = document.querySelector('#modalCart')

seeCartButtons.forEach(function(seeCart) {
  seeCart.addEventListener('click', function(){
    oneMaskCart.style.display = 'none'
    modalCart.style.display = 'block'
  })
})

// MenuBurger 

var burgerMenu = document.querySelector('#burgerMenu')
var burgerItems = document.querySelector('#burgerItems')
burgerMenu.addEventListener('click', function(){
  if (burgerItems.style.display == 'block'){
    burgerItems.style.display = 'none'
  } else  {
    burgerItems.style.display = 'block'
  }
})

document.addEventListener('click', function (e) {
  if (burgerItems.style.display == 'block' && e.target && e.target != burgerMenu) {
    burgerItems.style.display = 'none'
  }
})