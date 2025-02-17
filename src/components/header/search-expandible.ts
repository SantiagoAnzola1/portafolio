//input search

import { getWindowWidth } from "@/scripts/resizeHandler";
import {
  addScrollListener,
  removeScrollListener,
} from "../../scripts/scrollHandler";
import { toggleBackgroundBlur } from "./background-blur";
import { toggleHamburguerButton } from "./hamburguer-button";

// document.addEventListener("DOMContentLoaded", () => {
let isExpanded = false;

const searchExpandible = document.querySelector(
  "#search-expandible"
) as HTMLElement;

const searchInput = document.querySelector("#search-input") as HTMLInputElement;
export const toggleHeight = () => {
  if (!isExpanded) {
    //   searchExpandible.classList.add("h-seach-expandible");
    //   searchContainer.classList.remove("invisible");

    //   backgroudBlur.classList.remove("invisible");

    searchExpandible?.setAttribute("aria-expanded", "true");
    toggleHamburguerButton();
    addScrollListener(hideSearch);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (searchInput) {
          searchInput.focus();
        }
      });
    });
  } else {
    //   searchExpandible.classList.remove("h-seach-expandible");
    searchExpandible?.setAttribute("aria-expanded", "false");
    toggleHamburguerButton();
    //   searchContainer.classList.add("invisible");
    //   backgroudBlur.classList.add("invisible");
    removeScrollListener(hideSearch);
  }
  toggleBackgroundBlur();
  isExpanded = !isExpanded;
  console.log("search is expanded??  =>" + isExpanded);
};


export const hideSearch = () => {
  // searchExpandible.classList.remove("h-seach-expandible");
  if (isExpanded) {
    toggleBackgroundBlur();
    toggleHamburguerButton();
    searchExpandible?.setAttribute("aria-expanded", "false");
    // searchContainer.classList.remove("visible");
    // searchContainer.classList.add("invisible");
    // backgroudBlur.classList.add("invisible");
    isExpanded = !isExpanded;
    removeScrollListener(hideSearch);
  }
};

// const hideSearchOnWindowResize = () => {
//   const firstWindowSize = getWindowWidth();
//   if(firstWindowSize>833){
//     if(getWindowWidth()<833){

//     }

//   }else{

//   }
// };
