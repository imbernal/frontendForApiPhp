app.controller("mainController" , ["$scope" ,"$location", "$route" ,  "manufacturesProvider","productsProvidder" , function($scope,$location,$route , manufacturesProvider,productsProvidder){

  $scope.table_name = "Manufactures";


  manufacturesProvider.getManufactures().then(res=>{
    $scope.manufactures = res["data"];
  });

  $scope.myProducts = function (item, $event){

    $params = $.param({
      "manufacture_id": item.id
    });

    productsProvidder.getProductsByManufacture($params).then(res=>{
      $scope.a = "ASAS";
      $scope.productsManufactures = res["data"];
    });
  };

  $scope.showModal = function($event){
    $event.preventDefault();
    $(".modalManufacture").modal();
  }

  $scope.deleteManufacture = function(id,$event){

    $event.preventDefault();

    $params = $.param({
      "id": id
    });

    manufacturesProvider.deleteManufacture($params).then(res=>{
      manufacturesProvider.getManufactures().then(res=>{
        $scope.manufactures = res["data"];
      });
    });
  }

  $scope.addNewManufacture = function(manufacture){

    $params = $.param({
      "name": manufacture.name,
      "country": manufacture.country,
      "dropship": manufacture.dropship
    });


    manufacturesProvider.createManufacture($params).then(res=>{

      $route.reload();
    });
  }

}])
.controller("productsController" , ["$scope", "$location" , "$route", "productsProvidder" ,function($scope ,$location , $route, productsProvidder){

  $scope.table_name = "Products";

  productsProvidder.getProducts().then(res=>{
    $scope.products = res["data"];

  });

  $scope.showModal = function($event){
    $event.preventDefault();
    $(".modalProduct").modal();
  }

  $scope.addProduct = function(productData){

    $params = $.param({
      "name": productData.name,
      "description": productData.description,
      "price": productData.price
    });

  productsProvidder.createProduct($params).then(res=>{
    $location.path("/manufactures");
  });
}

  $scope.editProduct = function(product,$event){
    $event.preventDefault();

    $(".modalProduct").modal();

    $params = $.param({
      "prod_id": product.id
    });

  }

  $scope.deleteProduct = function(id,$event){

    $event.preventDefault();

    $params = $.param({
      "id": id
    });

    productsProvidder.deleteProduct($params).then(res=>{
      productsProvidder.getProducts().then(res=>{
        $scope.products = res["data"];
      });
    });
  }
}]);
