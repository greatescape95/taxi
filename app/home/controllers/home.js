angular.module("myapp")
.controller("HomeController", ["$scope", "$timeout", "$http", function( $scope, $timeout, $http ){
  //focus first link
  document.getElementById('home').focus();
  $(document).ready(function(){
      $(this).scrollTop(0);
  });

$scope.isRequiredName = false;
$scope.isRequiredPhone = false;

  $scope.submit = function( user ){
    $scope.isRequiredName = false;
    $scope.isRequiredPhone = false;
    if(!user.name){
      $scope.isRequiredName = true;
    }
    else if(!user.phone){
      $scope.isRequiredPhone = true;
    } else {
      $http({
        method: 'POST',
        url: '/api/messages',
        data: { user: user },
        headers: {'Content-Type': 'application/json'}
      }).then(function(res){
        $('#contact-form').css("display", "none");
        $('#feedback-form').css("display", "block");
      }).catch( function( err ){
        console.log( err );
      });
    }
  };

 $scope.master = {};

  $scope.reset = function(form) {
    $scope.isRequiredName = false;
    $scope.isRequiredPhone = false;
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();

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
