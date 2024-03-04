function initMap() {
    var myLatLng = {lat: -15.8027623, lng: -47.9572857};

            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 16 // Adjust the zoom level as needed
            });

            // Create a marker and set its position
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Sinaeg' // Optional title for the marker
            });
}