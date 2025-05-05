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
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Validación del formulario

const nameField = document.getElementById('name');
const surnameField = document.getElementById('surname');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function() {
    if (nameField.value && surnameField.value && emailField.value && phoneField.value) { //Si todos los campos estan completos
        const formData = {name: nameField.value, surname: surnameField.value, email: emailField.value, phone: phoneField.value};
        const formJSON = JSON.stringify(formData);
        localStorage.setItem('formData', formJSON);

        window.alert("Enviado exitosamente");
    }
    else {
        if (!nameField.value) {
            nameField.style.border = '2px solid red';
        }
        if (!surnameField.value) {
            surnameField.style.border = '2px solid red';
        }
        if (!emailField.value) {
            emailField.style.border = '2px solid red';
        }
        if (!phoneField.value) {
            phoneField.style.border = '2px solid red';
        }
    }
});

// ~ ~ Carrusel ~ ~

//Creación dinamica de slides

const slidesData = [
    {
      image: 'https://placehold.co/600x400?text=Slide+1',
      caption: 'First Slide'
    },
    {
      image: 'https://placehold.co/600x400?text=Slide+2',
      caption: 'Second Slide'
    },
    {
      image: 'https://placehold.co/600x400?text=Slide+3',
      caption: 'Third Slide'
    }
];

const slideshowContainer = document.getElementById('slider');

slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="Slide ${index + 1}">
      <div style="text-align:center; color:white; position:absolute; bottom:8px; width:100%;">${slide.caption}</div>
    `;
    slideshowContainer.appendChild(slideDiv);
  });

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}