/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global constant declarations


const studentList = document.getElementsByClassName('student-item');
const numberOfPages = Math.floor(studentList.length / 10) + 1;
const mainDiv = document.getElementsByClassName('page');

/***
   Creates a function a function that takes a list and page number.  This
   function displays a selection of students based on the page number and the
   index of the students in the list, and hides the others.
***/

const showPages = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= ((page * 10) - 10) && i <= ((page * 10) - 1)) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

/***
   Creates a function that adds the html for the page links based on the
   number of students (and therefore, number of pages).  Also it adds
   functionality to those page links (clickable).
***/
const appendPageLinks = (list) => {
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pagination';
  mainDiv[0].appendChild(pageDiv);
  const pageUL = document.createElement('ul');
  pageDiv.appendChild(pageUL);

  for (let i = 1; i <= numberOfPages; i++) {
    const pageLI = document.createElement('li');
    const pageA = document.createElement('a');
    pageUL.appendChild(pageLI);
    pageLI.appendChild(pageA);
    pageA.textContent = i;
    pageA.addEventListener('click', () => {
      showPages(list, i);
    });
  }

  const pagLinks = document.querySelectorAll('a');
  pageUL.addEventListener('click', (e) => {
    for (let i = 0; i < pagLinks.length; i++) {
      pagLinks[i].classList.remove("active");
    }
    e.target.className = 'active';
  });
};

//Adding event listener to load only the first page upon initial page load.
document.addEventListener('DOMContentLoaded', () => {
  showPages(studentList, 1);
});
appendPageLinks(studentList);


/* Below is my attempt to complete the exceeds expecations goals.  Unfortunately
I didn't get there.  But it would be nice to know if I was on the right track...*/

/*
const headerDiv = document.getElementsByClassName('page-header');
const searchBar = document.createElement('input');
const searchButton = document.createElement('button');
headerDiv[0].appendChild(searchBar);
headerDiv[0].appendChild(searchButton);
searchBar.className = 'student-search';
searchBar.placeholder = 'Search students by name';
searchButton.className = 'student-search';
searchButton.textContent = 'Search';
const noMatch = document.createElement('h3');
const posSearch = [];
const negSearch = [];

searchButton.addEventListener('click', () => {

  for (let i = 0; i < studentList.length; i++){
    if (searchBar.value == studentList[i].firstElementChild.firstElementChild.nextElementSibling.textContent) {
      posSearch.push(studentList[i]);
      //studentList[i].style.display = 'none';
    } else {
      negSearch.push(studentList[i]);
    }
  }
  if (posSearch.length > 0) {
    for (let i = 0; i < posSearch.length; i++) {
      posSearch[i].style.display = 'block';
    }
    for (let i = 0; i < negSearch.length; i++) {
      negSearch[i].style.display = 'none';
    }
    appendPageLinks(posSearch);
  }
  if (posSearch.length == 0){
    noMatch.textContent = 'No match found';
    mainDiv[0].appendChild(noMatch);
    for (let i = 0; i < negSearch.length; i++) {
      negSearch[i].style.display = 'none';
    }
  }
});
*/
