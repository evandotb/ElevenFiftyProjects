const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Q4VzyZDHiTLidN47dHsdbjjT9XIeK2Ir';//1

const key = 'Q4VzyZDHiTLidN47dHsdbjjT9XIeK2Ir'; //2
let url; //3

/*
1 - Here we declare the baseURL of the API. This is the required API endpoint for the New York Times data.
2 - You need to take the API Key that you see in your account for the app you created and put this in the value of the  variable. This will let the NYT know exactly what user is using their API.
3 - We'll see later how we use the  variable. We'll use it to make a dynamic search url.
*/

//search form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//results navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//results section
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

    //1                        //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

/*
1 - First of all, remember that the  variable targets the form element in the  page.
2 - The event that we're looking for is the  event. This is an HTML form event. Note that the  event fires on a form, not a button (Links to an external site.). When this event happens (the form is submitted by pressing the submit button), we will fire off a function called , the second parameter in the function.
3 - The same is true for the other two items, except that they called are  events. When we click on the next button, we fire off a function called . When we click on the previous button, we run .
*/

                    //1
function fetchResults(e) {
    console.log(e); //2
    e.preventDefault(); //6
    // assemble the full URL
    url = baseURL + 'api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    console.log("URL:", url); //4

    if(startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    }; 
    if(endDate.value !== '') {
        url += '&end_date' + endDate.value;
    };

    //7
    fetch(url)
    .then(function(result) {
        //console.log(result);
        return result.json(); //8
    }) .then(function(json) {
        //console.log(json); //9
        displayResults(json); // 10 & 11
    });
    
}
    //12
    function displayResults(json) {
        //console.log("DisplayResults", json);
        //console.log(json.response.docs);
        let articles = json.response.docs;
        //console.log(articles);

        while (section.firstChild) {
            section.removeChild(section.firstChild) //23
        }

        if(articles.length === 0) {
            //console.log("No Results");
        
        } else {
            //display the data
            for(let i = 0; i < articles.length; i++) {
                //console.log(i);
                let article = document.createElement('article') //13 
                let heading = document.createElement('h2'); //14
                let link = document.createElement('a'); //17
                let img = document.createElement('img'); //33
                let para = document.createElement('p'); // 24
                let clearfix = document.createElement('div'); //25

                let current = articles[i]; //18
                console.log("Current:", current); //19

                link.href = current.web_url; //20
                link.textContent = current.headline.main; //21

                para.textContent = 'Keywords: '; //26

                //27
                for(let j = 0; j < current.keywords.length; j++) {
                    //28
                    let span = document.createElement('span');
                    //29
                    span.textContent += current.keywords[j].value + ' ';
                    //30
                    para.appendChild(span);
                }
                
                //34
                if (current.multimedia.length > 0) {
                    //35
                    img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                    //36
                    img.alt = current.headline.main;
                }

                clearfix.setAttribute('class', 'clearfix'); //31 

                article.appendChild(heading); //15
                heading.appendChild(link); //22
                article.appendChild(img); //37
                article.appendChild(para); //32
                article.appendChild(clearfix); //32
                section.appendChild(article); //16
            }
        }
        if(articles.length === 10) {
            nav.style.display = 'block'; //shows the nav display if 10 items are in the array
        } else {
            nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    };

function nextPage(e) {
    pageNumber++; //1
    fetchResults(e); //2
    //console.log("Next button clicked");
    console.log("Page number:", pageNumber); //3
} //5

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    //console.log("Next button clicked");
    console.log("Page:", pageNumber);
} //5

/*
1 - The little (e) is part of something in Javascript called an event handling function. Every event handling function receives an event object. For the purpose of this discussion, think of an object as a "thing" that holds a bunch of properties (variables) and methods (functions). The handle, the e, is similar to a variable that allows you to interact with the object.
2 - We are logging the event object so that you can look at it in the console for learning purposes.
3 - We are creating a versatile query string. The url variable is loaded with other variables and url requirements. We have our base for the API, our key, the page number that corresponds to the results array, and our specific value. Something to study on your own might be: ?, &, and &q= in a URL string. What are those?
4 - We log the string so that we can see it. Later on, you can try another search and see how it changes.
5 - We add in a few basic functions to define nextPage and previousPage and log them. If you leave out this step, your app will get an error.
6 - We add the preventDefault method to make sure that a request isn't actually sent. In other words, even though we tell our code to submit the data, we don't actually want data to be submitted anywhere. This isn't a form where we are signing up for something or filling out data to be saved in a database. That is the default nature of a form element: to submit data, to send a POST request.
7 - Remember that fetch is a reserved keyword in JavaScript that allows us to make a request for information, similar to using a GET request with HTTP. The url is given to fetch as a parameter, which sends the request to the url.
8 - Meanwhile, it creates a promise containing a result object. This is our response. Remember that we use promises when we have asynchronous, long-running operations. The fetch gets the network resource, which might take a long time to resolve. It will convert the response into a json object by returning the result.json function.
9 - That json object is used in another promise (set off by the second .then) to send the information received to another function. For now, we'll use console.log(json) to see the json data.
10 - We've taken out the console.log in our fetch and replaced it with displayResults(json).
11 - We moved the console.log to a displayResults() function.
12 - Now, just to recap: when the Promise returns the json, we fire off a function called  that will work to manage that data.
13 - We create an article variable that will create a node in the DOM that is an article element. Remember that article is an HTML5 element.
14 - We also create a heading variable that creates a node in the DOM that is an  element.
15 - We call appendChild() on the article element. This will create a child node on that element. We pass in heading to the appendChild method. This means that there will be an h2 element created inside each article element.
16 - Since we have a section in our original html file, we call the appendChild() method on the section element. We pass in the article to that. This way, the article is a child of section, and the h2 is a grandchild of section.
17 - We create a link variable that is going to use the a element, the anchor tag which will allow us to create an 'href' link.
18 - We create a current variable that holds the data of the current article as we iterate.
19 - We log the current data so that we can see it in the console.
20 - Since link is an a element, we need to attach an href property to it. current.web_url grabs the hyperlink for the current article out of the json result. This will set the value for the link.href each time we iterate.
21 - The text that we'll use in link.textContent is set to the value of current.headline.main, which is part of the json object from the NYT API. You can see this when you drill down into the data: 
22 - Finally, we call the appendChild method on the heading element again. This will append a link as a child element in the DOM inside of each h2. See the screenshot for orientation: 
23 - We run the displayResults function each time the button gets pressed. In this chunk of code, we are checking to see if the section element has any child elements. If the section.firstChild is true, then we call removeChild on the section variable, which targets the section element in the html file. This simply will clear out any child elements that are in the section.
24 - We've declared a paragraph variable that will append a p tag to the DOM to be used for some of our JSON data.
25 - We're declaring a clearfix variable that will later on append a div to the DOM. More on that later.
26 - We are adding the textContent attribute to our para variable. Each result will show this at the start of the p tag that is created by para.
27 - Now, we have a for loop inside of our for loop. We are using this nested loop to iterate over the current object, specifically the keywords array for that object. If you look through the JSON results, you'll see that keywords is a property of the entire object, and it's an array. Here, we iterate through the length of the array for the current result object.
28 - As we iterate, we create a <span> for each keyword. If you don't already know, a <span> will be an element that will end when the item ends. So, the <span> of Pizza will start at the P and end at the a. If we were to use a p tag here, it would cover the entirity of the parent object.
29 - The textContent for each <span> will be the value found inside the keywords array inside the JSON object.
30 - We append each <span> to the para node.
31 - Remember that we still have an outer loop and printing the results. Here, we're using the setAttribute method to target our clearfix class. It's a class in the CSS file.
32 - We add clearfix & para as children of article.
33 - We add an img variable that will create an image element.
34 - We use a conditional to check the JSON for data. There is a multimedia property in the JSON. You should go look for it in the json. If that has anything in it (if the length is greater than 0), then, we'll do some stuff in the next steps.
35 - If there is an object, we want to concatenate a string with the url for the html src  value. We will add the first item in the multimedia array: current.multimedia[0].url . That is all confusing, so it helps here to think about a regular old image tag:
36 - We need an alt if something should happen that the image isn't available. We set it to the value of the headline.
37 - We append the image to the article element for each of our items. 
*/