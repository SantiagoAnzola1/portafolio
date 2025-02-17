const resizeCallbacks: VoidFunction[] = [];
let currentWidth = window.innerWidth;

/**
 * Adds a resize callback function to the list of resize callbacks.
 * @param {VoidFunction} callback - The callback function to be executed on resize.
 */
export function addResizeListener(callback: VoidFunction) {
  if (typeof callback === "function") {
    resizeCallbacks.push(callback);
  }
}

/**
 * Resize event handler.
 * Iterates over the list of resize callbacks and executes them.
 */
function onResize() {
  const newWidth = window.innerWidth;

  if (newWidth !== currentWidth) {
    currentWidth = newWidth;
    resizeCallbacks.forEach((callback) => {
      callback();
    });
  }
}

/**
 * Gets the current width of the window.
 * @returns {number} - The current window width.
 */
export function getWindowWidth() {
  return currentWidth;
}

/**
 * Initializes the resize listener by adding the 'resize' event listener to the window.
 * This function is responsible for executing all the resize callbacks when the window is resized.
 */
export function initResizeListener() {
  window.addEventListener("resize", onResize);
}

/**
 * Removes a resize callback function from the list of resize callbacks.
 * @param {VoidFunction} callback - The callback function to be removed from the list of resize callbacks.
 */
export function removeResizeListener(callback: VoidFunction) {
  const index = resizeCallbacks.indexOf(callback);
  if (index > -1) {
    resizeCallbacks.splice(index, 1);
  }
}
