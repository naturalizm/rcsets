window.addEventListener("DOMContentLoaded",(e=>{const t=document.body.querySelector("#sidebarToggle");t&&t.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("sb-sidenav-toggled"),localStorage.setItem("sb|sidebar-toggle",document.body.classList.contains("sb-sidenav-toggled"))}))}));