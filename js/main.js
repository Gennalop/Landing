let ready = () => {
    console.log('DOM está listo')
}

let loaded = () => {
    //console.log('Iframes e Images cargadas')
    let myform = document.getElementById('form');
    myform.addEventListener('submit', function(eventSubmit) {
        eventSubmit.preventDefault();
        var emailElement = document.querySelector(".form-control-lg");
        var emailText = emailElement.value;
        if (emailText.length === 0) {
            emailElement.focus()
            emailElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 400,
                    easing: "linear",
                    //iterations: 1,                          // Número de iteraciones
                    //fill: 'forwards'  
                }
            )
          
        }
    })
}

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)