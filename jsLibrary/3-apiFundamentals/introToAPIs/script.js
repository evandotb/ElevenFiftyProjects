const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; //Here we declare the baseURL of the API. This is the required API endpoint for the New York Times data.
const key = 'Q4VzyZDHiTLidN47dHsdbjjT9XIeK2Ir'; // You need to take the API Key that you see in your account for the app you created and put this in the value of the  variable. This will let the NYT know exactly what user is using their API.
let url; //We'll use it to make a dynamic search url.

//search form
const searchTerm = document.querySelector('.search'); //search term variable for search id
const startDate = document.querySelector('.start-date'); //start date variable for start date id
const endDate = document.querySelector('.end-date'); //end date variable for end date id
const searchForm = document.querySelector('form'); //search form variable for form section
const submitBtn = document.querySelector('.submit'); //setting submit variable for submit button

//results navigation
const nextBtn = document.querySelector('.next'); //setting next button varibale for next id
const previousBtn = document.querySelector('.prev'); //setting previous variable for previous id
const nav = document.querySelector('nav'); //setting nav variable for nav

const section = document.querySelector('section'); //declaring section variable for section in html
nav.style.display = 'none'; //hide nav display


let pageNumber = 0; //set initial page number to zero
// console.log('PageNumber:', pageNumber);
searchForm.addEventListener('submit', fetchResults); //fetching results for submit click
nextBtn.addEventListener('click', nextPage); //next page button takes you to the next page
previousBtn.addEventListener('click', previousPage); //previous click takes you to the previous page

function fetchResults(e) { //event interacting with e object
    // console.log(e);
    e.preventDefault(); //prevents page from refreshing
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //string interpolation to create url
    // console.log('URL:', url);
    if (startDate.value !== '') { //if start date is not blank
        console.log(startDate.value) //log start date
        url += '&begin_date=' + startDate.value; //append start date value to url
        console.log('URL:', url);
    }
    if (endDate.value !== '') { //if end date is not blank
        console.log(endDate.value) //log end date
        url += '&end_date=' + endDate.value; //append date to url
        console.log('URL:', url);
    }
    fetch(url) //request info from api
        .then(function (result) { //returns result object from api
            console.log(result) //log result
            return result.json(); //jsonify result
        })
        .then(function (json) { //pull json object from the previous then
            console.log(json);
            displayResults(json); //call display results function giving it json argument
        })
}
function displayResults(json) { //display results creating 10 items per page
    console.log('Display Results', json);
    // console.log(json.response.docs);
    while (section.firstChild) { //We run the displayResults function each time the button gets pressed. In this chunk of code, we are checking to see if the section element has any child elements. If the section.firstChild is true, then we call removeChild on the section variable, which targets the section element in the html file. This simply will clear out any child elements that are in the section.
        section.removeChild(section.firstChild); 
    }
    let articles = json.response.docs;
    // console.log(articles);
    if (articles.length === 0) {
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {
            // console.log(i);
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i];
            console.log('Current:', current);
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = 'Keywords: ';
            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }
            clearfix.setAttribute('class', 'clearfix');
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
    if (articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
function nextPage(e) { //function when next button is clicked
    // console.log('Next button clicked');
    pageNumber++; //adding page number by one
    fetchResults(e); //running fetchresult function
    console.log('Page Number:', pageNumber); //
}
function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}