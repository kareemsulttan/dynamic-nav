# dynamic-nav
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
