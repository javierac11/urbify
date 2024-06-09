document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector("html").classList.toggle('dark-mode');
        document.querySelectorAll('button').forEach(button => {
            button.classList.toggle('dark-mode');
        });
        document.querySelector('div.crear_cuenta').classList.toggle('dark-mode');
        document.querySelector('p.terminos').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('a').forEach(a => {
            a.classList.toggle('dark-mode')
        });
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Modo Claro';
        } else {
            toggleButton.textContent = 'Modo Oscuro';
        }
    });
});