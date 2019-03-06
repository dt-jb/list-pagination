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

const studentList = document.getElementsByClassName('student-item');
const numberOfPages = Math.floor(studentList.length / 10) + 1;
const mainDiv = document.getElementsByClassName('page');


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
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
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
      showPages(studentList, i);
    });
  }
  const pagLinks = document.querySelectorAll('a');
    for (let i = 0; i < pagLinks.length; i++) {
      pagLinks[i].classList.remove("active");
    }
};

appendPageLinks();



// Remember to delete the comments that came with this file, and replace them with your own code comments.
