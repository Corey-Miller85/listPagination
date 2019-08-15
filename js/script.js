var list = document.querySelectorAll('.student-item');
const numberOfItems = 10;



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

const emptyStudents = () => {
   for (let i = 0; i < list.length; i ++) {
      list[i].style.display = 'none';
   }
}

document.addEventListener('click', (e) => {
   const input = document.querySelector('input');
   var newlist = []
   // if (e.target.tagName == "BUTTON") {
      for (let i = 0; i < list.length; i += 1){
         const h3 = list[i].querySelector("h3");
         const text = h3.textContent;
         if (input.value.length !== 0 && text.includes(input.value)) {
            newlist.push(list[i]);
            showPage(newlist,1);
         } else {

         }
      }
      
   // }
});

// document.addEventListener('keyup', () => {
//    const input = document.querySelector('input');

//    const newList = [];
//       for (let i = 0; i < list.length; i += 1) {
//          const h3 = list[i].querySelector("h3");
//          const text = h3.textContent;
//          if (input.value.length !== 0 && text.includes(input.value)) {
//             newList.push(list[i]);
//             console.log(newList);
//             showPage(newList,1);

//          } else {

//          }
//       }
// });

appendSearchBar();
appendPageLinks(list);
showPage(list, 1);










// Remember to delete the comments that came with this file, and replace them with your own code comments.