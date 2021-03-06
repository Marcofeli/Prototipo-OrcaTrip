/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('mapCtrl', function($scope) {
        $scope.avistamientos= [
            {
                latitud: 48.553352,
                longitud: -125.086479,
                cantidadIndividuos: 20,
                tipo: "residentes",
                supTipo: "A"
            },
            {
                latitud: 50.817163,
                longitud: -128.621048,
                cantidadIndividuos: 70,
                tipo: "Maritima",
                supTipo: "C"
            },
            {
                latitud: 73.292133,
                longitud: -73.454771,
                cantidadIndividuos: 40,
                tipo: "Transeuntes",
                supTipo: "B"
            }
        ];
        var mymap =  L.map('mapid',{attributionControl: false})
            .setView([48.553352, -125.086479], 2);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        var Icon = L.icon({
            iconUrl: 'orcaMarkerPequeño.png',

            iconSize:     [38, 38], // size of the icon
            iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
        });

        $scope.init=function () {
            console.log("entro")
            for (var i= 0;i< $scope.avistamientos.length;i++ ){
                console.log( $scope.avistamientos[i]);
                marker = new L.marker([ $scope.avistamientos[i].latitud, $scope.avistamientos[i].longitud], { icon:Icon, draggable:'false'});
                //mymap.addLayer(marker);
                marker.addTo(mymap);
            }


        }

    });