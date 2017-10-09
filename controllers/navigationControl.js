myAngularApp.controller('navigationControl', function($scope, $location){
    
   $scope.isActive =  function(currentRoute){
       
       return currentRoute === $location.path();
   }
    
});