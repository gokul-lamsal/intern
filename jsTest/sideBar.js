const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const sideBar = document.querySelector(".sideBar");
const menuBtn = document.querySelector(".menuBtn");
let isOpen = false;

// menuBtn.addEventListener("click", () => {
//   if (isOpen) {
//     sideBar.style.width = "100px";
//     openBtn.style.display = "inline";
//     closeBtn.style.display = "none";
//   } else {
//     sideBar.style.width = "500px";
//     openBtn.style.display = "none";
//     closeBtn.style.display = "inline";
//   }
//   isOpen = !isOpen;
// });

openBtn.addEventListener("click",()=>{
    sideBar.style.width="500px"
    openBtn.style.display = "none"
    closeBtn.style.display = "inline"
})

closeBtn.addEventListener("click",()=>{
    sideBar.style.width="100px"
     openBtn.style.display = "inline"
    closeBtn.style.display = "none"
})
