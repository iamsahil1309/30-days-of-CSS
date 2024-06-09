const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle-btn')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})