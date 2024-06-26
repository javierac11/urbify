document.addEventListener("DOMContentLoaded", ()=>{
    const toggleButton = document.getElementById("toggle-dark-mode");
    // Restaurar el estado del modo oscuro al cargar la página
    if (sessionStorage.getItem("dark-mode") === "true") enableDarkMode();
    else disableDarkMode();
    toggleButton.addEventListener("click", ()=>{
        if (document.body.classList.contains("dark-mode")) disableDarkMode();
        else enableDarkMode();
    });
    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        document.querySelector("html").classList.add("dark-mode");
        document.querySelectorAll("button").forEach((button)=>{
            button.classList.add("dark-mode");
        });
        document.querySelector("div.crear_cuenta").classList.add("dark-mode");
        document.querySelector("p.terminos").classList.add("dark-mode");
        document.querySelector("footer").classList.add("dark-mode");
        document.querySelector("header").classList.add("dark-mode");
        document.querySelectorAll("a").forEach((a)=>{
            a.classList.add("dark-mode");
        });
        toggleButton.textContent = "Modo Claro";
        sessionStorage.setItem("dark-mode", "true");
    }
    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        document.querySelector("html").classList.remove("dark-mode");
        document.querySelectorAll("button").forEach((button)=>{
            button.classList.remove("dark-mode");
        });
        document.querySelector("div.crear_cuenta").classList.remove("dark-mode");
        document.querySelector("p.terminos").classList.remove("dark-mode");
        document.querySelector("footer").classList.remove("dark-mode");
        document.querySelector("header").classList.remove("dark-mode");
        document.querySelectorAll("a").forEach((a)=>{
            a.classList.remove("dark-mode");
        });
        toggleButton.textContent = "Modo Oscuro";
        sessionStorage.setItem("dark-mode", "false");
    }
});

//# sourceMappingURL=crear_cuenta.b84ed318.js.map
