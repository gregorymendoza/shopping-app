myAngularApp.controller('main', function($scope, $location, shoppingCart) {

    $scope.products = [{     
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, neque, dicta. At iste soluta dolorem animi culpa libero delectus.",
        price: 10,
        image: "product.png"
    }, {
        id: 2,
        name: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, neque, dicta. At iste soluta dolorem animi culpa libero delectus.",
        price: 16,
        image: "product.png"
    }, {
        id: 3,
        name: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, neque, dicta. At iste soluta dolorem animi culpa libero delectus.",
        price: 22,
        image: "product.png"
    }];
    
    $scope.cart = [];
    
    $scope.buy = function(_item) {
        
        _item.lock = true;
        
        $scope.cart.push(_item);
        
        shoppingCart.products = $scope.cart;
        
    }
    
    $scope.total = function() {
        
        var total = 0;
        for(item of $scope.cart){
            
            total += item.price;
        }
        
        shoppingCart.total = total;

        return total;
        
    }
    
    $scope.finish = function() {
        
        $location.path("/confirmation");
        
    }
    
});