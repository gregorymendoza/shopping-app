myAngularApp.controller('confirmation', function($scope, shoppingCart) {
    
    $scope.total = shoppingCart.total;
    $scope.products = shoppingCart.products;
    
});