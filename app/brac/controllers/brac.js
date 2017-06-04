angular.module("myapp")
.controller("BracController", ["$scope", "$timeout", function( $scope, $timeout ){
  //focus first link
  document.getElementById('brac').focus();
  $(document).ready(function(){
    $(this).scrollTop(0);
  });



  var mapInit = function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(43.385905, 16.555234)
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(43.385905, 16.555234),
      map: map
    });
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(map.getCenter());
    });
  }();

}]);
