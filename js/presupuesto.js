document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuestoForm');
    const totalElement = document.getElementById('total');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const cantidadBasica = parseInt(form.cantidadBasica.value);
        const cantidadPremium = parseInt(form.cantidadPremium.value);
        const cantidadEdicion = parseInt(form.cantidadEdicion.value);
        const extras = document.querySelectorAll('input[name="extra"]:checked');

        let total = 0;

        // Calcular total de camisetas
        total += cantidadBasica * 10;
        total += cantidadPremium * 15;
        total += cantidadEdicion * 20;

        // Sumar extras
        extras.forEach(extra => {
            total += parseFloat(extra.value);
        });

        totalElement.textContent = `Total: €${total}`;

        // Resetear formulario
        form.reset();
    });
});
