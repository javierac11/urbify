document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("toggle-dark-mode");function o(){document.body.classList.add("dark-mode"),document.querySelector("html").classList.add("dark-mode"),document.querySelectorAll("button").forEach(e=>{e.classList.add("dark-mode")}),document.querySelector("button.modo").classList.add("dark-mode"),document.querySelector("footer").classList.add("dark-mode"),document.querySelector("header").classList.add("dark-mode"),document.querySelectorAll("a").forEach(e=>{e.classList.add("dark-mode")}),e.textContent="Modo Claro",sessionStorage.setItem("dark-mode","true")}function t(){document.body.classList.remove("dark-mode"),document.querySelector("html").classList.remove("dark-mode"),document.querySelectorAll("button").forEach(e=>{e.classList.remove("dark-mode")}),document.querySelector("button.modo").classList.remove("dark-mode"),document.querySelector("footer").classList.remove("dark-mode"),document.querySelector("header").classList.remove("dark-mode"),document.querySelectorAll("a").forEach(e=>{e.classList.remove("dark-mode")}),e.textContent="Modo Oscuro",sessionStorage.setItem("dark-mode","false")}"true"===sessionStorage.getItem("dark-mode")?o():t(),e.addEventListener("click",()=>{document.body.classList.contains("dark-mode")?t():o()})});
//# sourceMappingURL=lugares.27092754.js.map