let log = console.log


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
let maskAlreadyOnCart = 0
let customerCart = document.querySelector('#customerCart')

carts.forEach(function (cart) {
  cart.addEventListener('click', function (cart) {
    var maskComingInCart = document.createElement('img')
    maskComingInCart.src = cart.target.parentNode.children[0].src
    maskComingInCart.classList.add('mask-on-cart')
    
    document.querySelectorAll('.mask-on-cart').forEach(function (maskOnCart) {
      if (maskComingInCart.src == maskOnCart.src) {
        log(maskOnCart.parentNode.childNodes[1].lastChild.innerHTML)
        maskOnCart.parentNode.childNodes[1].lastChild.innerHTML = parseInt(maskOnCart.parentNode.childNodes[1].lastChild.innerHTML) + 1
        maskAlreadyOnCart = 1
      }
    })
    if (maskAlreadyOnCart == 0 || document.getElementsByClassName('mask-on-cart').length == 0) {
      customerCart.insertAdjacentHTML('beforeend', '<div class="cart-item-container"></div>')
      customerCart.lastChild.appendChild(maskComingInCart)
      customerCart.lastChild.insertAdjacentHTML('beforeend', '<p class="number-items">x<span>1</span></p>')
      customerCart.lastChild.insertAdjacentHTML('beforeend', '<button class="delete-item">suppress</button>')
    }
    maskAlreadyOnCart = 0
  })
})






// Modal

var modal = document.querySelector('#simpleModal')
var modalBtn = document.querySelector('#modalBtn')
var closeBtn = document.querySelector('#closeBtn')
var imageModal = document.querySelector('#imageModal')

masks.forEach(function (mask) {
  mask.addEventListener('click', function (mask) {
    modal.style.display = 'block'
    imageModal.src = mask.target.attributes.src.value
  })
})
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', clickOutside)

function closeModal() {
  modal.style.display = 'none'
}

function clickOutside(e) {
  if (e.target == modal)
    modal.style.display = 'none'
}