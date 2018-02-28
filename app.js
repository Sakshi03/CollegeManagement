var app=angular.module('myApp',['ui.router']);
app.config(['$stateProvider' , function($stateProvider){
    $stateProvider.state({
        name: 'home',
        url:'/',
        templateUrl:'home.html',
        controller: 'myCtrl'
    });
    
}]);

app.controller('myCtrl',function($scope,$http){
    var secondBtn=document.getElementById('secondBtn');
    var modal = document.getElementById('simpleModal');
    var modalOne=document.getElementById('simpleModalOne');
    var modalBtn=document.getElementById('modalBtn');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
    var closeBtnOne=document.getElementsByClassName('closeBtn')[1];
    var cancelBtn=document.getElementById('cancelBtn');
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    closeBtnOne.addEventListener('click',closeModalOne);
    secondBtn.addEventListener('click',openModalOne);
    cancelBtn.addEventListener('click',closeModalOne);
    function openModal() {
    console.log("aaa")
    modal.style.display = 'block';
    }
    function closeModal() {
    modal.style.display = 'none';
    }
    function openModalOne(){
    modalOne.style.display='block';
    }
    function closeModalOne(){
    modalOne.style.display='none';
    }

  $scope.CurrentDate=new Date();
   $scope.names = ["Invalid data", "Connectivity Issue", "Lorem Ipsum"];
   $scope.getList = function(statedata) {
       $scope.items = [];  
    $http({

             method: "GET",
                url: "https://api.schooldigger.com/v1.1/schools?st="+statedata+"&appID=78779334&appKey=0ff92a94522f8ad39316a4b53e78cc54"
            }).then(function mySuccess(data, status) {
                console.log('success',data);
                $scope.items = data.data.schoolList;
             }).then(function(data, status) {
                // alert("Error");
            })
        }
    });


