angular.module("myapp").config([
  "$routeProvider", function( $routeProvider){
    $routeProvider.when("/photos", {
      controller: "PhotosController",
      templateUrl: "app/photos/templates/photos.html"
    });
  }
]);
