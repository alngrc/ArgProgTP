const observ = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } else {
            entry.target.classList.remove('mostrar');
        }
    });
});

const elementosOcultos = document.querySelectorAll('.oculto');
elementosOcultos.forEach((el) => observ.observe(el));


let mail = document.getElementById('#mail').value;
function sendMail() {
    window.open(`mailto:${mail}`);

}