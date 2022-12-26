
const toggleTheme = document.getElementById('switch');
const toggleBody = document.getElementById('switch-body');
const root = document.querySelector(':root');


function getCurrentTheme() {

    //primero chequeo preferencia del SO y la meto en la variable theme (dark o ligth)
    let theme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark' : 'light'

    //después, chequeo preferencia del usuario en localstorage, si existe, sobreescribo la variable theme
    localStorage.getItem('dashboard-theme') ? theme =
    localStorage.getItem('dashboard-theme') : null;
 
    //devuelvo la variable theme con la preferencia del tema de app o del usuario
    return theme;
}

//Pasa la variable "theme" 
function loadTheme(theme) {
    if (theme === 'light') {
        toggleTheme.checked = false; //si theme = 'light' desdchequea el chekbox
    } else if (theme === 'dark') {
        toggleTheme.checked = true;//si theme = 'dark' chequea el chekbox
    }
    root.setAttribute('color-scheme', `${theme}`);
}

//Escucha el objeto "windows" y ejecuta la función "getCurrentTheme" al iniciar el DOM
window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
})

toggleTheme.addEventListener('click', () => {
    let theme = getCurrentTheme();

    if (theme === 'dark') {
        theme = 'light';
    } else if (theme === 'light') {
        theme = 'dark';
    }
    localStorage.setItem('dashboard-theme', `${theme}`)
    loadTheme(theme);
})