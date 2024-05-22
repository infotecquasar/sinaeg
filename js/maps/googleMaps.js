function initMap() {
    var myLatLng = {lat: -15.797213838048698, lng: -47.88644233699109};

            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 16 // Adjust the zoom level as needed
            });

            // Create a marker and set its position
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'SCS, Quadra 01, Bloco K, Ed. Denasa 1 andar, DF, 70398-900' // Optional title for the marker
            });
}