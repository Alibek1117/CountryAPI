const filter = document.querySelector('.filter')
const regions = document.querySelector('#regionId')
const formSearch = document.querySelector('.form__search')
// const regions1 = document.querySelector('.regions1')
const region = document.querySelectorAll('.region')
const filterTitle = document.querySelector('.filter__title')
const darkMode = document.querySelector('.dark__mode')
const modeFromStore = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
const full = document.querySelector('.full')
const header = document.querySelector('.header')
const dark__mode__img = document.querySelector('.dark__mode__img')
const dark__title = document.querySelector('.dark__title')
const imgFilter = document.querySelector('.img__light')
const search__bar = document.querySelector('.search__bar')
const search__input = document.querySelector('.search__input')
const search__icon = document.querySelector('.search__icon')
//region
const africa = document.querySelector('.africa')
const america = document.querySelector('.america')
const asia = document.querySelector('.asia')
const europe = document.querySelector('.europe')
const oceania = document.querySelector('.oceania')
const whole = document.querySelector('.whole')
//region
// console.log(region);
const card = document.querySelector(".body__cards");
const error = document.querySelector(".error");
const name = document.querySelector(".title");
const population = document.querySelector(".population");
const capital = document.querySelector(".capital");
const cardImg = document.querySelector(".card-img");
const carta = document.querySelector(".carta");

if (modeFromStore) {
    full.classList.add('dark-mode')
}

filter.addEventListener('click', () => {
    // regions.remove('class', 'regions')
    regions.classList.toggle('regions1')
})
region.forEach((reg) => {
    reg.addEventListener('click', () => {
        filterTitle.textContent = reg.textContent;
        // let added = document.createElement('div')
        // added.classList.add('region')
        // added.textContent = "All"
        // regions.append(added)
        // region.forEach(el => {
        //     // if (el.textContent!='All') {
        //     //     added.textContent = "All"
        //     // }
        //     console.log(el.textContent);
        // });

        // // console.log(added);

    })
})
darkMode.addEventListener('click',()=>{
    full.classList.toggle('dark-mode')
    modeFromStore ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark')
})
darkMode.addEventListener('click', () => {
    full.classList.toggle('full__dark')
    header.classList.toggle('header__dark')
    dark__mode__img.classList.toggle('dark__mode__img__dark')
    filter.classList.toggle('filter__dark')
    imgFilter.classList.toggle('img__dark')
    regions.classList.toggle('regions1__dark')
    search__bar.classList.toggle('search__bar__dark')
    search__input.classList.toggle('search__input__dark')
    search__icon.classList.toggle('search__icon__dark')
    // carta.setAttribute('class', 'carta__dark')
    dark__title.textContent = 'Light Mode'

})





async function fetchingURL() {
    try {
        let request = await fetch("https://restcountries.com/v3.1/all")
        let res = await request.json()
        let data = res.map((item, i) => {
            let itemCard = document.createElement('a')
            itemCard.setAttribute('href', `./single.html?country=${item.name.common}`)
            itemCard.classList.add('carta')
            const carta = document.querySelector('.carta')
            // console.log(carta);
            let population = ''
            if (Math.round(item.population/1000000)>1) {
                population=Math.round(item.population/1000000)+'M'
            }else {
                population=Math.round(item.population/1000)+'K'
            }

            // console.log(item);
            itemCard.innerHTML = `<img
            src=${item.flags.png}
            class="card-img"
            alt=""
          />
          <div class="card-content">
            <h2 class="title">${item.name.common}</h2>
            <p class="pop__title">
              <b>Population</b>: <span class="population">${population}</span>
            </p>
            <p class="pop__title">
              <b>Region</b>: <span class="region">${item.region}</span>
            </p>
            <p class="camita__title">
              <b>Capital</b>: <span class="capital">${item.capital}</span>
            </p>
          </div>`;
            card.append(itemCard);
            // console.log(item.name.common);
            formSearch.addEventListener('keyup', e => {
                e.preventDefault()
                let searchValue = formSearch.searching.value.toLowerCase()
                let countNames = item.name.common.toLowerCase()
                // console.log(itemCard);
                card.appendChild(itemCard);
                if (countNames.includes(searchValue)) {
                    itemCard.style.display = 'block'

                } else {
                    itemCard.style.display = 'none'

                }
            })

            africa.addEventListener('click', () => {
                if (item.region == 'Africa') {
                    // console.log(itemCard);
                    itemCard.style.display = 'block'
                }
                else {
                    itemCard.style.display = 'none'

                }
            })
            america.addEventListener('click', () => {
                if (item.region == 'Americas') {
                    // console.log(itemCard);
                    itemCard.style.display = 'block'
                }
                else {
                    itemCard.style.display = 'none'

                }
            })
            asia.addEventListener('click', () => {
                if (item.region == 'Asia') {
                    // console.log(itemCard);
                    itemCard.style.display = 'block'
                }
                else {
                    itemCard.style.display = 'none'

                }
            })
            europe.addEventListener('click', () => {
                if (item.region == 'Europe') {
                    // console.log(itemCard);
                    itemCard.style.display = 'block'
                }
                else {
                    itemCard.style.display = 'none'

                }
            })
            oceania.addEventListener('click', () => {
                if (item.region == 'Oceania') {
                    // console.log(itemCard);
                    itemCard.style.display = 'block'
                }
                else {
                    itemCard.style.display = 'none'

                }
            })
            whole.addEventListener('click', () => {
                itemCard.style.display = 'block'

            })


        })


    } catch (err) {

        let title = 'Bu joyladan kamchili tipomisiz ustoz:)'
        full.innerHTML = `<h2 class = 'error__title'>${title}</h2>`
        // span.classList.add('span')
    }

}
fetchingURL()

// export const createCountryInfo = (country) => {
//     console.log(country);
// }



