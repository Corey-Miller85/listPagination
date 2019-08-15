/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.querySelectorAll('.student-item');
const numberOfItems = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list,page){
   const startIndex = (page * numberOfItems) - numberOfItems;
   const endIndex = page * numberOfItems;
    for (let i = 0; i < list.length; i += 1) {
       if (i >= startIndex && i < endIndex) {
         list[i].style.display = "";
      } else {
          list[i].style.display = 'none';
      }
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendSearchBar() {
   const targetPageHeader = document.querySelector('.page-header');
   const createSearch = document.createElement('div');
   const searchInput = document.createElement('input');
   const searchButton = document.createElement('button');
   createSearch.className = 'student-search';
   searchInput.className = 'search-input';
   searchInput.placeholder = 'Search for students...';
   searchButton.textContent = 'Search';
   targetPageHeader.appendChild(createSearch);
   const targetPageHeaderChild = targetPageHeader.lastElementChild;
   targetPageHeaderChild.appendChild(searchInput);
   const targetSearch = document.querySelector('.student-search');
   targetSearch.appendChild(searchButton);
}

function removeListItems() {
   
}


function appendPageLinks(list) {
   const pageDiv = document.querySelector('div.page');
   const createDiv = document.createElement('div');
   createDiv.className = "pagination";
   pageDiv.appendChild(createDiv);
   const createUL = document.createElement('ul');
   const paginationDiv = document.querySelector('div.pagination');
   paginationDiv.appendChild(createUL);
   for (let i = 0; i < Math.ceil((list.length / numberOfItems)); i += 1){
      const ul = paginationDiv.querySelector('ul');
      const createLI = document.createElement('li');
      ul.appendChild(createLI);
      const createA = document.createElement('a');
      createA.href = '#' 
      createA.textContent = i + 1;
      const li = ul.querySelector('li');
      li.appendChild(createA);
      if (i === 0){
         const aSelector = li.querySelector('a');
         aSelector.className = 'active';
      }
   }
}


document.addEventListener('click', (e) => {
   const targetA = document.querySelectorAll('a');
   const target = e.target;
   if (target.tagName == "A") {
      for (let i = 0; i < targetA.length; i += 1) {
         targetA[i].className = "";
      }
      target.className = "active";
      console.log(target);
      showPage(list, parseInt(target.textContent));
   }
});

document.addEventListener('click', (e) => {
   if (e.target.tagName === 'BUTTON'){
      const searchInput = document.querySelector('.search-input');
      const value = searchInput.value;
      for (let i = 0; i < list.length; i += 1) {
         const ul = document.querySelector('.student-list');
         const li = document.querySelectorAll('.student-list .student-item');
         const h3 = document.querySelectorAll('.student-list .student-item h3')[i];
         if (h3.textContent.includes(value) == false) {
            ul.removeChild(li[i])
         }
      }
   }
});




// const listArray = document.querySelectorAll('.student-item h3')
// function makeArray(){
//    var array = [];
//    for (let i = 0; i < listArray.length; i += 1){
//       array.push(listArray[i].textContent)
      
//    }
//    console.log(array);
// }
removeListItems();
appendSearchBar();
showPage(list, 1);
appendPageLinks(list);









// Remember to delete the comments that came with this file, and replace them with your own code comments.