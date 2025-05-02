let lightmode = localStorage.getItem('light-mode')
const modeSwitch = document.getElementById('mode-switch')
const sun = document.getElementById('Sun')
const moon = document.getElementById('Moon')

const enableLightmode = () => {
    document.body.classList.add('light-mode')
    localStorage.setItem('light-mode', 'active')
    moon.style.display = 'block'
    sun.style.display = 'none'

}

const disableLightmode = () => {
    document.body.classList.remove('light-mode')
    localStorage.setItem('light-mode', null)
    moon.style.display = 'none'
    sun.style.display = 'block'
}

if (lightmode === "active") enableLightmode()

modeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('light-mode')

    if (lightmode !== "active"){
        enableLightmode()
    }
    else{
        disableLightmode()
    }
});
