var app = angular.module("apiApp" , ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when("/manufactures" , {
      templateUrl: "assets/templates/table_manufactures.html",
      controller: "mainController"
    })
    .when("/products_by_manufacture" , {
      templateUrl: "assets/templates/products_by_manufactures.html",
      controller: "mainController"
    })
    .when("/products" , {
      templateUrl: "assets/templates/table_products.html",
      controller: "productsController"
    })
    .when("/create_product" , {
      templateUrl: "assets/templates/create_product.html",
      controller: "productsController"
    })
    .when("/edit_product" , {
        templateUrl: "assets/templates/create_product.html",
        controller: "productsController"
    })
    .otherwise({
      templateUrl: "assets/templates/table_manufactures.html",
      controller: "mainController"
    });
});
