/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// First I need to store all the selected elements in a variables
const allSections = document.querySelectorAll("section"); // storing section elements to use it in the loop
const navList = document.getElementById("navbar__list"); // storing navbar ul element to append li childs to it
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * PLAN
 * FIRST STAGE
 * I was confused a bit about what loop method I should use for loop or forEach
 * 1- I used forEach method based on this link https://alligator.io/js/foreach-vs-for-loops/
 * 2- I need to get all sections id's to add it to the nav links href with # so once the user clicks on the link it scrolls to the section withthe same id
 * 3- I need to get all data-nav to append it to the a tag
 * 4- I used getAttribute method to get all id's and data-nav https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 * 5- I created an li elements
 * 6- I added an a element to the li with # and the section id and added the data-nav value to it
 * 7- I used textNode at first to add the a to the li but the code shows as a text, after search I used innerHTML
 * 8- I appended the li to the ul using appendChild https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 * 9- For the smooth scroll I follwed this links https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165
 * https://stackoverflow.com/questions/47319525/how-to-scroll-the-page-smoothly/47319536
 */

   allSections.forEach( (sections) => { // The function has been updated to arrow function 6/24/2021
    const getId = sections.getAttribute("id");
    const getDataNav = sections.getAttribute("data-nav");
    const navLi = document.createElement("li");
    navLi.innerHTML = `<a href="#${getId}" class="menu__link">${getDataNav}</a>`;
    navList.appendChild(navLi);
    navLi.addEventListener('click', function (smoothing) {
      smoothing.preventDefault();
      sections.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/*
 * SECOND STAGE
 * 1- I searched to get the idea for adding and removing a class to the section based on the scrolling
 * 2- I followed these links to get an idea  https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671 - 
 https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll?retiredLocale=ar
 * 3- I tried to use onscroll function in the loop above but it didn't work properly
 * 4- I used the same parameter (sections) and calculated the section height and position to get the nearst postion at the top of the page
 * 5- I use if condition to add and remove classes based on scrolling
 * 6- I also added a class (active) to the links
 * 7- I also follwed this code to excute the function properly https://github.com/HossamMarey/active-class-on-scroll/blob/master/main.js#L3
 */

onscroll = function(){
  allSections.forEach(function(sections){
      const scrollPos = document.documentElement.scrollTop;
      if (
        scrollPos >= sections.offsetTop - sections.offsetHeight * 0.25 &&
        scrollPos <
          sections.offsetTop + sections.offsetHeight - sections.offsetHeight * 0.25
      )  {
        sections.classList.add("your-active-class");
        const currentId = sections.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
      } else {
        sections.classList.remove("your-active-class");
      }
    });
  };

  const removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach(function(el){
      el.classList.remove("active");
    });
  };
  
  const addActiveClass = function (id) {
    // console.log(id);
    const selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
  };

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active