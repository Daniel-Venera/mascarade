let log = console.log

let buttons = document.querySelectorAll('button')
let types = document.querySelectorAll('.type')
let masks = document.querySelectorAll('.mask')
let colors = document.querySelectorAll('.color')

function select(typeOfButton, classType, element) {
  typeOfButton.forEach(function (color) {
    if (color.classList.contains(classType)) {
      color.classList.remove(classType)
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
        if (mask.classList.contains('hidden')) {
          mask.classList.remove('hidden')
        }
      } else if (!mask.classList.contains(e.target.id)) {
        mask.classList.add('hidden')
      } else {
        mask.classList.remove('hidden')
      }
    }
    )

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
