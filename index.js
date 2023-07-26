const arrayFotos = document.querySelectorAll("img")
const arrayLista = document.querySelectorAll("li")
const arrayNombres = document.querySelectorAll("h2")
const arrayCorreos = document.querySelectorAll("h4")
const arrayPhones = document.querySelectorAll("p")
const input = document.querySelector("input")
const deleteCards = document.querySelectorAll("h2, h4, p")



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
      }

      arrayLista.forEach(element => {
        element.addEventListener("mouseenter", () => {
          console.log(element.childNodes)
          element.childNodes[1].style.transform = "scale(2)"
          element.childNodes[3].style.display = "none"
          element.childNodes[5].style.display = "none"
          element.childNodes[7].style.display = "none"
          element.childNodes[9].style.display = "none"
        })
        element.addEventListener("mouseleave", () => {
          console.log(element.childNodes)
          element.childNodes[1].style.transform = "scale(1)"
          element.childNodes[3].style.display = "list-item"
          element.childNodes[5].style.display = "list-item"
          element.childNodes[7].style.display = "list-item"
          element.childNodes[9].style.display = "list-item"
        })
      })
    })
}

data()




// fetch("https://randomuser.me/api/?page=3&results=100&seed=abc")
//     .then((response) => response.json())
//     .then((json) => console.log(json))







