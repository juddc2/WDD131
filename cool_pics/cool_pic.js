const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  function viewerTemplate(pic, alt) {
    let html =
      <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="norris-full.jpeg"></img>
      </div>;
    return html
  }
  viewHandler(event);{
const img = event.target.closte("img");
let attribute=img.getAttribute('src');
let beg=attribute.split("-");
let full=beg[0] + '-full.jpeg';
console.log(full);
let body=document.querySelector('body');
let html=viewerTemplate(full, 'random image');
}
  handleResize();
  window.addEventListener("resize", handleResize);
  
  viewHandler()
  window.addEventListener("viewer", viewHandler)