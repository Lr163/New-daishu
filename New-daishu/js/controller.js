function myCtrl($scope,$timeout,$interval) {
    $scope.count="获取验证码"; 
    $scope.flag=false;
    $scope.go=function() {
        $scope.flag=true;
        $scope.index=10;
        $scope.count=$scope.index+"秒"; 
        var timer=setInterval(function() {                 
            $scope.$apply(function() {
                $scope.index--;
                $scope.count=$scope.index+"秒";              
                if($scope.index<=0) {
                    $scope.count="重新发送验证码";
                    $scope.flag=false;
                    clearInterval(timer);
                }               
            });                
        },1000);
    } 
}; 

angular.module('myapp')
       .controller('myCtrl',myCtrl)