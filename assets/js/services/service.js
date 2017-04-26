app.factory("productsProvidder" , ["$http" , function($http){

   var sadasd = "";

  function getProducts(){
    return $http.get("http://localhost/onlineClass/reactapi/api/read_all_products.php");
  }

  function createProduct($params){
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/create_product.php",
      data: $params,
      cache: true,
      method: "POST"
    })
    .success(function(res){
        console.log(res);
    });
  }

  function deleteProduct($params){

    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/delete_product.php",
      cache:true,
      data: $params,
      method: "POST"
    }).success(function(res){
      console.log(res);
    });

  }

  function getOne($params){

    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/read_one_product.php",
      data: $params,
      cache: true,
      method: "POST"
    }).success(function(res){
      console.log(res);
    });

  }

  function getProductsByManufacture($params){
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/productsByManufacture.php",
      data: $params,
      method: "POST"
    }).success(function(res){
      console.log(res);
    });
  }

  return { getProducts , createProduct, deleteProduct , getOne , getProductsByManufacture }

}])
.factory("manufacturesProvider" , ["$http" , function($http){

  function getManufactures(){
    return $http.get("http://localhost/onlineClass/reactapi/api/read_all_manufactures.php");
  }

  function createManufacture($params){
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/create_manufacture.php",
      data: $params,
      method: "POST"
    })
    .success(function(res){
        console.log(res);
    });
  }

  function deleteManufacture($params){
    console.log($params);
    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/delete_manufacture.php",
      data: $params,
      method: "POST"
    }).success(function(res){
      console.log(res);
    });

  }

  function getOne($params){

    return $http({
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: "http://localhost/onlineClass/reactapi/api/read_one_manufacture.php",
      data: $params,
      method: "POST"
    }).success(function(res){
      console.log(res);
    });
  }

  return { getManufactures , createManufacture , deleteManufacture , getOne }

}]);
