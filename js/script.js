var list = document.querySelectorAll('.student-item');
const numberOfItems = 10;



function showPage(list,page){
   const startIndex = (page * numberOfItems) - numberOfItems; //startindex is (1 * 10) - 10 = 1 
   const endIndex = page * numberOfItems; //endIndex = 1 * 10 = 10 
    for (let i = 0; i < list.length; i += 1) {
       if (i >= startIndex && i < endIndex) {
         list[i].style.display = "";
      } else {
          list[i].style.display = 'none';
      }
   }
}

function appendPageLinks(list) {
   const checkPaginationDiv = document.querySelector('.pagination');
   if (checkPaginationDiv) {
      const ul = checkPaginationDiv.querySelector('ul');
      checkPaginationDiv.removeChild(ul);
   } else {
   
   const pageDiv = document.querySelector('div.page'); //targets main div
   const createPaginationDiv = document.createElement('div'); //creates div for pagination
   createPaginationDiv.className= 'pagination'; // sets class name of pagination
   pageDiv.appendChild(createPaginationDiv); //adds pagination div
   }
   //targets pagination div, creates Ul and nested LIs
   const createUL = document.createElement('ul');
   const paginationDiv = document.querySelector('.pagination');
   paginationDiv.appendChild(createUL);
   const paginationUlLocation = document.querySelector('.pagination ul');
  
   // need to create LI on loop of list.length divided by number of itmes.
   for (let i = 0; i < (list.length / numberOfItems); i += 1 ){
      const createPaginationLI = document.createElement('li');
      paginationUlLocation.appendChild(createPaginationLI);
   }
   //loops through created list items and appends anchor tag with href set
   const liList = document.querySelectorAll('.pagination ul li');
   for (let i = 0; i < liList.length; i += 1) {
      const createA = document.createElement('a');
      createA.href = '#' 
      createA.textContent = i + 1;
      liList[i].appendChild(createA);

      if (i === 0 ){  //if it is the first list item, set its class to active.
         createA.className = 'active';
      }
   }



}

// adds the search bar. 
function appendSearchBar() {
   const targetPageHeader = document.querySelector('.page-header');  //targets page-header class
   const createSearch = document.createElement('div');   //creates div element for search bar
   const searchInput = document.createElement('input'); // creates input element for search bar
   const searchButton = document.createElement('button'); //creates button element for search bar
   createSearch.className = 'student-search'; // sets className for search div
   searchInput.className = 'search-input'; // sets class name for search input
   searchInput.placeholder = 'Search for students...';   //sets placeholder text for input form 
   searchButton.textContent = 'Search'; // sets button text
   targetPageHeader.appendChild(createSearch);  //adds search div to page
   const targetPageHeaderChild = targetPageHeader.lastElementChild; // targets location for search input form 
   targetPageHeaderChild.appendChild(searchInput); // add search input form to page. 
   const targetSearch = document.querySelector('.student-search'); // target the search div 
   targetSearch.appendChild(searchButton); // add search button
}

// adds no seach results 

function noResults() {
   const checkForNoResult = document.querySelector('.no-result');
   if (checkForNoResult) {
      const ul = document.querySelector('.student-list');
      const li = ul.querySelector('.no-result');
      ul.removeChild(li);
   }
const studentList = document.querySelector('.student-list');
const addNoResults = document.createElement('li');
addNoResults.className = "no-result";
addNoResults.textContent = "No Matches Found...";
addNoResults.style.display = ""
studentList.appendChild(addNoResults)
}

// function yesResults() {
//    const studentList = document.querySelector('.student-list');
//    const addNoResults = document.createElement('li');
//    addNoResults.className = "no-result";
//    addNoResults.textContent = "No Matches Found...";
//    addNoResults.style.display = ""
//    const checkNoResults = document.querySelector('.no-result');
//    if (checkNoResults) {
//       studentList.removeChild(checkNoResults);
//    }
// }



// event listener for the page link buttons
document.addEventListener('click', (e) => {
   const targetA = document.querySelectorAll('a'); //selects all anchor tags
   const target = e.target;
   if (target.tagName == "A") {     //if the click was on an anchor tag
      for (let i = 0; i < targetA.length; i += 1) { //loop thorugh anchor tags setting class to blank
         targetA[i].className = "";
      }
      target.className = "active"; //sets clicked link to active class
      showPage(list, parseInt(target.textContent)); //shows new page
   }
});


//runs the fucntions when the page loads 
showPage(list, 1);
appendPageLinks(list);
appendSearchBar();

//assigns constants to the newly created elements for the listeners to use.
const searchButton = document.querySelector('.student-search button')
const inputForm = document.querySelector('input');

// event listener for the search button
searchButton.addEventListener('submit', (e) => {
   const input = document.querySelector('input');
   var newlist = [] //new array to hold in matches
   if (e.target.tagName == "BUTTON") {    //if but search button was clicked
      for (let i = 0; i < list.length; i += 1) {      //loop through original list
         const h3 = list[i].querySelector("h3");      
         const text = h3.textContent.toLowerCase();      //assigns the text content converted to lower case  of the h3's to text      
         if (text.includes(input.value)) { //if text field is not blank and has a text match
            newlist.push(list[i]); // push text matched names to new list
         } else {
            list[i].style.display = 'none'; // hide non match
         }
      }
      
   }
   showPage(newlist, 1); // returns new page with matches
   appendPageLinks(newlist); // returns new page links matching number of matches
});

//event listener for keyup
inputForm.addEventListener('keyup', () => {
   const input = document.querySelector('input');
   var newlist = []  //new array to hold in matches
   for (let i = 0; i < list.length; i += 1) {   //loop through original list 
      const h3 = list[i].querySelector("h3");
      const text = h3.textContent.toLowerCase(); //looking only at name text
      if (text.includes(input.value)) { //if text field is not blank and has a text match
         newlist.push(list[i]);  // push text matched names to new list
      } else {
         list[i].style.display = 'none'; // hide non match
      }
      
   } 

   if (newlist.length == 0) {
      noResults(); //if list is blank run noResult()
   }
   showPage(newlist, 1); // returns new page with matches
   appendPageLinks(newlist); // returns new page links matching number of matches
});









