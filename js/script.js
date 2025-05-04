// Modo oscuro

let darkmode = localStorage.getItem('darkmode');
const darkBtn = document.getElementById('darkBtn');

const enableDarkmode = function() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}
const disableDarkmode = function() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}
if(darkmode === 'active') enableDarkmode();

darkBtn.addEventListener('click', function() {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});