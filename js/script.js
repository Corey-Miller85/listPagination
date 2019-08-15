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
   const pageDiv = document.querySelector('div.page'); //targets main div
   const createPaginationDiv = document.createElement('div'); //creates div for pagination
   createPaginationDiv.className= 'pagination'; // sets class name of pagination
   pageDiv.appendChild(createPaginationDiv); //adds pagination div
  
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

appendPageLinks(list)


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

// const emptyStudents = () => {
//    for (let i = 0; i < list.length; i ++) {
//       list[i].style.display = 'none';
//    }
// }

// document.addEventListener('click', (e) => {
//    const input = document.querySelector('input');
//    var newlist = []
//    if (e.target.tagName == "BUTTON") {
//       for (let i = 0; i < list.length; i += 1){
//          const h3 = list[i].querySelector("h3");
//          const text = h3.textContent;
//          if (input.value.length !== 0 && text.includes(input.value)) {
//             newlist.push(list[i]);
//             showPage(newlist,1);
//          } else {

//          }
//       }
      
//    }
// });

// // document.addEventListener('keyup', () => {
// //    const input = document.querySelector('input');

// //    const newList = [];
// //       for (let i = 0; i < list.length; i += 1) {
// //          const h3 = list[i].querySelector("h3");
// //          const text = h3.textContent;
// //          if (input.value.length !== 0 && text.includes(input.value)) {
// //             newList.push(list[i]);
// //             console.log(newList);
// //             showPage(newList,1);

// //          } else {

// //          }
// //       }
// // });

showPage(list, 1);
// appendSearchBar();










// // Remember to delete the comments that came with this file, and replace them with your own code comments.