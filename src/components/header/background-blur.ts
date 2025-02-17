const backgroudBlur = document.querySelector(
    "#background-blur"
  ) as HTMLElement;


export const toggleBackgroundBlur=()=>{
    if(backgroudBlur){
        const isExpanded=backgroudBlur.getAttribute("aria-expanded")==="true";
        backgroudBlur?.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    }
}