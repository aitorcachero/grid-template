const arrayFotos = document.querySelectorAll("img")
const arrayNombres = document.querySelectorAll("h2")
const arrayCorreos = document.querySelectorAll("h4")
const arrayPhones = document.querySelectorAll("p")



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
    })

}


data()




