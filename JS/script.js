let entry = document.querySelector('.header__entry')
let avatar = document.querySelector('.avatar')
let login = document.querySelector('.popup-wrapper')
let cross = document.querySelector('.login__cross')
let formBtn = document.querySelector('.form__btn')
let popupWrapper = document.querySelector('.popup-wrapper')
let shiftRight = document.querySelector('.shift-right')
let monthPremiers = document.querySelector('.month-premiers')

actualizeHeaderButtons()

entry.addEventListener('click', function(e) {
  login.classList.toggle('active-popup')
})

shiftRight.addEventListener('click', function(e) {
  monthPremiers.style.transform = "translateX(50)"
})

cross.addEventListener('click', function(e) {
  login.classList.remove('active-popup')
})

formBtn.addEventListener('click', function(e) {
  e.preventDefault()

  login.classList.remove('active-popup')

  const email = e.currentTarget.form[0].value
  window.localStorage.setItem("email", email)
  actualizeHeaderButtons()
})

avatar.addEventListener('click', function(e) {
  window.localStorage.removeItem("email")
  actualizeHeaderButtons()
})

document.addEventListener('click', function(e) {
  if(e.target === login) {
    login.classList.remove('header__login--active')
  }
})

function actualizeHeaderButtons() {
  if (window.localStorage.getItem("email") === null) {
    entry.classList.remove("hidden")
    avatar.classList.add("hidden")
  } else {
    entry.classList.add("hidden")
    avatar.classList.remove("hidden")
  }
}


let cardWitdh = 211
let cardCount = 6


let monthPremiersPosition = 0
let monthPremiersList = document.querySelector('.month-premiers')
let monthPremiersElements = monthPremiersList.querySelectorAll('li')

document.querySelector('.left-month-premiers').addEventListener('click', function() {
  monthPremiersPosition += cardWitdh * cardCount
  monthPremiersPosition = Math.min(monthPremiersPosition, 0)
  monthPremiersList.style.marginLeft = monthPremiersPosition + 'px'
})

document.querySelector('.right-month-premiers').addEventListener('click', function() {
  monthPremiersPosition -= cardWitdh * cardCount
  monthPremiersPosition = Math.max(monthPremiersPosition, -cardWitdh * (monthPremiersElements.length - cardCount));
  monthPremiersList.style.marginLeft = monthPremiersPosition + 'px'
})

let forFamilyPosition = 0
let forFamilyList = document.querySelector('.for-family')
let forFamilyElements = forFamilyList.querySelectorAll('li')

document.querySelector('.left-for-family').addEventListener('click', function() {
  forFamilyPosition += cardWitdh * cardCount
  forFamilyPosition = Math.min(forFamilyPosition, 0)
  forFamilyList.style.marginLeft = forFamilyPosition + 'px'
})

document.querySelector('.right-for-family').addEventListener('click', function() {
  forFamilyPosition -= cardWitdh * cardCount
  forFamilyPosition = Math.max(forFamilyPosition, -cardWitdh * (forFamilyElements.length - cardCount));
  forFamilyList.style.marginLeft = forFamilyPosition + 'px'
})
