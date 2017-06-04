angular.module("myapp", [
  "ngRoute",
]);

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

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/brac", {
    controller: "BracController",
    templateUrl: "app/brac/templates/brac.html"
  });
  }]);

$(document).ready(function(){
  $('.menu-small-icon').click(function(){
    $(".menu-small-dropdown").show();
  });
  $(".menu-small-dropdown li").click(function(){
    $( ".menu-small-dropdown" ).hide();
  });
});

angular.module("myapp")
.controller("ContactController", ["$scope", "$http", function( $scope, $http ){

  document.getElementById('contact').focus();

  $(document).ready(function(){
    $(this).scrollTop(0);
  });

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

  var defaultForm = {
      name: "",
      email : "",
      message : ""
  };

  $scope.reset = function( form ){
    if (form) {
      form.$setPristine();
      $scope.user = angular.copy(defaultForm);
      form.$setUntouched();
    }
  };

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

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
    $routeProvider.when("/contact", {
      templateUrl: "app/contact/templates/contact.html",
      controller: "ContactController"
    });
  }
]);

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

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/", {
    controller: "HomeController",
    templateUrl: "/app/home/templates/home.html"
  });
  $routeProvider.otherwise("/");
  }]);

angular.module("myapp")
.controller("PhotosController", ["$scope", "$timeout", function( $scope, $timeout ){
  //focus first link
  document.getElementById('photos').focus();
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

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider){
    $routeProvider.when("/photos", {
      controller: "PhotosController",
      templateUrl: "app/photos/templates/photos.html"
    });
  }
]);
