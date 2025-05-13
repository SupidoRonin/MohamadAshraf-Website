let darkmode = localStorage.getItem('dark-mode')
const modeSwitch = document.getElementById('mode-switch')
const sun = document.getElementById('Sun')
const moon = document.getElementById('Moon')

const enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'active')
    moon.style.display = 'block'
    sun.style.display = 'none'

}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', null)
    moon.style.display = 'none'
    sun.style.display = 'block'
}

if (darkmode === "active") enableDarkmode()

modeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('dark-mode')

    if (darkmode !== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
});
