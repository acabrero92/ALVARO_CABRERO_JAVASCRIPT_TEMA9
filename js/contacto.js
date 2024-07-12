document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const map = L.map('map').setView([38.095, -3.635], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            const marker = L.marker([38.095, -3.635]).addTo(map)
                .bindPopup('Camisetas Cabrero<br>C/Gardenia 68, Linares, Jaén')
                .openPopup();

            const userMarker = L.marker([userLat, userLng]).addTo(map)
                .bindPopup('Tu ubicación')
                .openPopup();

            const routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(userLat, userLng),
                    L.latLng(38.095, -3.635)
                ],
                createMarker: function() { return null; },
                routeWhileDragging: true
            }).addTo(map);
        });
    } else {
        alert('Geolocalización no soportada por tu navegador.');
    }
});
