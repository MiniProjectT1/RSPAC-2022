angular.module('BlankApp', ['ngMaterial'],
function($mdThemingProvider) {
$mdThemingProvider.theme('docs-dark', 'default')
  .primaryPalette('yellow')
  .dark();
})
.controller('AppCtrl', ['$interval',
function($interval) {
  var self = this;

  self.activated = true;
  self.determinateValue = 30;

  // Iterate every 100ms, non-stop and increment
  // the Determinate loader.
  $interval(function() {

    self.determinateValue += 1;
    if (self.determinateValue > 100) {
      self.determinateValue = 30;
    }

  }, 100);
}
]);
angular.module('BlankApp', ['ngMaterial'])
.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAlert = function (ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete your debt?')
      .textContent('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Please do it!')
      .cancel('Sounds like a scam');

    $mdDialog.show(confirm).then(function () {
      $scope.status = 'You decided to get rid of your debt.';
    }, function () {
      $scope.status = 'You decided to keep your debt.';
    });
  };





 
  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }
});
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  var pr=document.getElementById("print");
  var br=document.getElementById("branch");
  pr.innerHTML=br.value;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function CloseModal(){
    modal.style.display = "none";
}