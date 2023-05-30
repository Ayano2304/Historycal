const menu = document.querySelector('.menu')
const toggle = document.querySelector('.mobile_menu')

menu.addEventListener('click', () => {
    toggle.classList.toggle('hidden')
})