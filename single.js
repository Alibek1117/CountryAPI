const darkMode = document.querySelector('.dark__mode')
const full = document.querySelector('.full')
const header = document.querySelector('.header')
const dark__mode__img = document.querySelector('.dark__mode__img')

const singleFlafg = document.querySelector('.left')
const top__left = document.querySelector('.top__left')
const top__right = document.querySelector('.top__right')
const borders = document.querySelector('.bottom')
const country__info = document.querySelector('.country__info')
const border__btn = document.querySelector('.border__btn')
const btn__back = document.querySelector('a.btn__back')
darkMode.addEventListener('click', () => {
    full.classList.toggle('full__dark')
    header.classList.toggle('header__dark')
    dark__mode__img.classList.toggle('dark__mode__img__dark')
    country__info.classList.toggle('country__info__dark')
    // border__btn.classList.toggle('border__btn__dark')
    btn__back.classList.toggle('dark__btn')
    // console.log(country__info);
    btn__back.childNodes[1].classList.toggle('back__arrow');


})

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/name/${country}`

async function countryURL() {
    let request = await fetch(`${countryAPI}`)
    let res = await request.json()
    let data = res.map((item) => {

        let nativeName = Object.values(item.name.nativeName)[0].official
        let currancy = Object.values(item.currencies)[0].name
        let languages = Object.values(item.languages)
        let population = Math.round(item.population/1000000)+'M'
        singleFlafg.innerHTML = `<img src='${item.flags.png}' alt="">`
        console.log(item, languages);
        top__left.innerHTML = `
        <h3 class = 'single__count__name'>${item.name.common}</h3>
        <div class = 'native__name single__class'>
         <b>Native Name: </b>${nativeName}
        </div>
        <div class = 'population single__class'>
         <b>Population: </b>${population}
        </div>
        <div class = 'region single__class'>
         <b>Region: </b>${item.region}
        </div>
        <div class = 'sub__region single__class'>
         <b>Sub Region: </b>${item.subregion}
        </div>
        <div class = 'capital single__class'>
         <b>Capital: </b>${item.capital}
        </div>`
        top__right.innerHTML = `
        <div class = 'tld single__class'>
         <b>Top Level Domain: </b>${item.tld}
        </div>
        <div class = 'currancies single__class'>
         <b>Currancies: </b>${currancy}
        </div>
        <div class = 'languages single__class'>
         <b>Languages: </b>${languages}
        </div>
        `
        borders.innerHTML = `
        <div class = 'country__borders'>
         <b>Border Countries: </b>${item.borders ? item.borders.map((border) => {
            return `
            <button class = 'border__btn'>${(border)}</button> 
            `
        }) : "No Borders"}
        </div>
        `
        console.log(item.borders);
    })
}
countryURL()
// request(countrAPI).then((data)=>{
//     // createCountryInfo(data)
// }).catch((err)=>{
//     let title = 'Bu joyladan kamchili tipomisiz ustoz:)'
//     full.innerHTML =  `<h2 class = 'error__title'>${title}</h2>`
// })