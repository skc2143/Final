var app = angular.module('app', []);

app.controller('HomeworkCtrl', function($scope, Homework) {
  $scope.homework = Homework;
});

app.factory('Homework', function(){
  
  return [
      {
        assignment: 'Test First JavaScript',
        url: 'http://github.com/skc2143/FullstackTestFirst',
        status: 'completed'
      },
      {
        assignment: 'Angular Flash Cards Day 1',
        url: 'http://github.com/skc2143/flashcards-day1',
        status: 'completed'
      },
      {
        assignment: 'Angular Flash Cards Day 2',
        url: 'http://github.com/skc2143/flash-cards',
        status: 'partially completed'
      },
      {
        assignment: 'Final Assessment',
        url: 'http://github.com/skc2143/Final',
        status: 'completed'
      }
    ];
});