const arrayFotos = document.querySelectorAll("img")
const arrayLista = document.querySelectorAll("li")
const arrayNombres = document.querySelectorAll("h2")
const arrayCorreos = document.querySelectorAll("h4")
const arrayPhones = document.querySelectorAll("p")
const input = document.querySelector("input")

function data() {

    fetch("https://randomuser.me/api/?page=3&results=100&seed=abc")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < arrayFotos.length; i++) {
        arrayFotos[i].src = json.results[i].picture.large
        arrayNombres[i].innerHTML = json.results[i].name.first + " " + json.results[i].name.last
        arrayCorreos[i].innerHTML = json.results[i].email
        arrayPhones[i].innerHTML = json.results[i].phone
      }
      input.oninput = () => {
        const arrayFullNombres = []
        const inputLower = input.value.toLowerCase()
        for (let i = 0; i < arrayNombres.length; i++) {
          arrayFullNombres.push(arrayNombres[i].innerHTML.toLowerCase())
        }
        const arrayFilter = arrayFullNombres.filter(x => x.includes(inputLower))
        for (let i = 0; i < arrayNombres.length; i++) {
          if (arrayFilter.includes(arrayFullNombres[i]))
            arrayLista[i].style.display = 'list-item';
        else
            arrayLista[i].style.display = 'none';


        }
        console.log(arrayFilter)
      }
    })

}

data()






