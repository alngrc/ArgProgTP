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


// function sendMail() {
//     window.open(`mailto:` + document.getElementById('mail').value + ``);

// }

function sendMail() {
    var link = 'mailto:alan.garciag10@outlook.com?subject=Message from '
             +document.getElementById('mail').value + ' | Doubt: '+document.getElementById('dudas').value
             +'&body='+document.getElementById('message').value;
    window.location.href = link;
}