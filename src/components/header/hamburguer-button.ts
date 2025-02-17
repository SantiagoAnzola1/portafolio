import {
  addResizeListener,
  getWindowWidth,
  removeResizeListener,
} from "@/scripts/resizeHandler";
import { toggleBackgroundBlur } from "./background-blur";
import { hideSearch } from "./search-expandible";

const button = document.getElementById("hamburguer-menu");
const header = document.getElementById("header");
const searchExpandible = document.getElementById("search-expandible");

const logo = document.getElementById("picture-logo");

// const body=document.querySelector('body');

let isOpened = "false";
export const toggleHamburguerMenu = () => {
  const isSearchExpandibleOpen =
    searchExpandible?.getAttribute("aria-expanded");
  if (isSearchExpandibleOpen === "true") {
    HideSearchField();
    console.log("search open", isSearchExpandibleOpen);
  } else {
    button?.classList.toggle("opened");
    isOpened = button?.classList.contains("opened") ? "true" : "false";
    // toggleBackgroundBlur();
    button?.setAttribute("aria-expanded", isOpened);
    header?.setAttribute("aria-expanded", isOpened);
    if (isOpened === "true") {
      document.body.style.overflow = "hidden";

      // navLinks?.focus();
      logo?.focus();

      addResizeListener(resizeHamburguermenu);
    } else {
      document.body.style.overflow = "auto";
      removeResizeListener(resizeHamburguermenu);
    }
  }
};

export const resizeHamburguermenu = () => {
  if (isOpened === "true") {
    if (getWindowWidth() > 833) {
      hideHamburguerMenu();
    }
  }
};

export const hideHamburguerMenu = () => {
  console.log("is hamburguer open");
  if (isOpened === "true") {
    toggleHamburguerMenu();
  }
};

export const HideSearchField = () => {
  //   button?.classList.toggle("opened");
  hideSearch();
};

export const toggleHamburguerButton = () => {
  button?.classList.toggle("opened");
};
