import { debounce } from './debounce'


const scrollCallbacks:VoidFunction[] = [];

let lastScrollY = 0;


/**
 * Adds a scroll callback function to the list of scroll callbacks.
 * @param {VoidFunction} callback - The callback function to be executed on scroll.
 */
export function addScrollListener(callback: VoidFunction) {
  if (typeof callback === 'function') {

    scrollCallbacks.push(callback);
  }
}


/**
 * Scroll event handler.
 * Iterates over the list of scroll callbacks and executes them.
 */
function onScroll() {
  const scrollY = window.scrollY;

  // if (scrollY !== lastScrollY) {
    lastScrollY = scrollY;
  // }
  scrollCallbacks.forEach((callback) => {
    // Execute the callback
    callback();
  });
}
export function getScrollY(){
  return lastScrollY;
}


/**
 * Initializes the scroll listener by adding the 'scroll' event listener to the window.
 * This function is responsible for executing all the scroll callbacks when the user scrolls.
 */
export function initScrollListener() {
  // Add the 'scroll' event listener to the window
  // The 'onScroll' function will be executed when a scroll event occurs
  window.addEventListener('scroll', onScroll );
}



/**
 * Removes a scroll callback function from the list of scroll callbacks.
 * @param {VoidFunction} callback - The callback function to be removed from the list of scroll callbacks.
 */
export function removeScrollListener(callback: VoidFunction) {
  const index = scrollCallbacks.indexOf(callback);
  if (index > -1) {
    scrollCallbacks.splice(index, 1);
  }
}
