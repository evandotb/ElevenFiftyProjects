const baseUrl = "https://api.nasa.gov/planetary/apod";
const key = "mcICM69Udk6wEmwa1VsYecUv9f71mTSYnAFeXZOT";

const date = document.querySelector(".date");
const form = document.querySelector("form");
const btn = document.querySelector(".submit");

const apod = document.querySelector(".div")

form.addEventListener("submit", fetchResults);

function fetchResults(e) {
  e.preventDefault();
  let url = `${baseUrl}?api_key=${key}&date=${date.value}`;

  if (date.value < '1995-06-16') {
    alert('The date can not be before 1995-06-16.') 
}
  
  fetch(url)
    .then(function (data) {
      console.log(data);
      return data.json();
    })
    .then(function (json) {
      console.log(json);
      displayData(json);
    });
}

function displayData(json) {
    while (apod.firstChild) {
        apod.removeChild(apod.firstChild);
    }


    let title = document.createElement('h2')
    title.innerText = json.title;
    
    let date = document.createElement('p')
    date.setAttribute('p', '1')
    date.innerText = json.date;
    
    let pic = document.createElement('img')
    pic.src = json.hdurl;
    
    let expl = document.createElement('p')
    expl.setAttribute('p', '2')
    expl.innerText = json.explanation;

    apod.appendChild(title);
    apod.appendChild(date);
    apod.appendChild(pic);
    apod.appendChild(expl);
}