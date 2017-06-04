angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/brac", {
    controller: "BracController",
    templateUrl: "app/brac/templates/brac.html"
  });
  }]);
