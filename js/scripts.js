document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('formPresupuesto');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validarFormulario();
    });
    form.addEventListener('change', calcularPresupuesto);

    function validarFormulario() {
        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let telefono = document.getElementById('telefono').value;
        let email = document.getElementById('email').value;
        let condiciones = document.getElementById('condiciones').checked;

        if (!/^[a-zA-Z]{1,15}$/.test(nombre)) {
            alert("Nombre inválido");
            return;
        }
        if (!/^[a-zA-Z\s]{1,40}$/.test(apellidos)) {
            alert("Apellidos inválidos");
            return;
        }
        if (!/^\d{9}$/.test(telefono)) {
            alert("Teléfono inválido");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Correo electrónico inválido");
            return;
        }
        if (!condiciones) {
            alert("Debe aceptar las condiciones de privacidad");
            return;
        }
        alert("Formulario enviado correctamente");
    }

    function calcularPresupuesto() {
        let producto = document.getElementById('producto').value;
        let plazo = document.getElementById('plazo').value;
        let extras = document.querySelectorAll('input[name="extras"]:checked');

        let precioProducto;
        switch (producto) {
            case 'producto1':
                precioProducto = 100;
                break;
            case 'producto2':
                precioProducto = 200;
                break;
            case 'producto3':
                precioProducto = 300;
                break;
        }

        let descuento = 0;
        if (plazo >= 6) {
            descuento = 0.1;
        }

        let precioExtras = 0;
        extras.forEach(extra => {
            switch (extra.value) {
                case 'extra1':
                    precioExtras += 50;
                    break;
                case 'extra2':
                    precioExtras += 75;
                    break;
                case 'extra3':
                    precioExtras += 100;
                    break;
            }
        });

        let precioFinal = (precioProducto + precioExtras) * (1 - descuento);
        document.getElementById('presupuesto').value = `$${precioFinal.toFixed(2)}`;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('map')) {
        initMap();
    }
});

function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
