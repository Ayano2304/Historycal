const menu = document.querySelector('.menu') // Tombolnya 
const toggle = document.querySelector('.mobile_menu') //Menu List nya

menu.addEventListener('click', () => {
    toggle.classList.toggle('hidden')
})

document.querySelectorAll('.gambar img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup_img').style.display = 'block'
        document.querySelector('.popup_img img').src = image.getAttribute('src')
    }
})

document.querySelector(".popup_img span").onclick = () =>{
    document.querySelector(".popup_img").style.display = "none";
}