const darkMode = document.querySelector('.dark__mode')
const full = document.querySelector('.full')
const header = document.querySelector('.header')
const dark__mode__img = document.querySelector('.dark__mode__img')

const singleFlafg = document.querySelector('.left')

darkMode.addEventListener('click', () => {
    full.classList.toggle('full__dark')
    header.classList.toggle('header__dark')
    dark__mode__img.classList.toggle('dark__mode__img__dark')
   

})

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countrAPI = `https://restcountries.com/v3.1/name/${country}`

// request(countrAPI).then((data)=>{
//     // createCountryInfo(data)
// }).catch((err)=>{
//     let title = 'Bu joyladan kamchili tipomisiz ustoz:)' 
//     full.innerHTML =  `<h2 class = 'error__title'>${title}</h2>`
// })