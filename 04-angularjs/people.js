angular
  .module('PeopleModule', [])
  .service('PeopleService', function() {
    this.getPeople = function() {
      return [
        { id: 11, name: 'Jason' },
        { id: 22, name: 'Alice' },
        { id: 33, name: 'Bob' }
      ];
    };
  })
  .factory('PeopleService2', function() {
    return {
      getPeople: function() {
        return [
          { id: 11, name: 'Jason' },
          { id: 22, name: 'Alice' },
          { id: 33, name: 'Bob' }
        ];
      }
    };
  })
  .provider('PeopleService3', function() {
    var customData;
    return {
      customize: function(data) {
        customData = data;
      },
      $get: function() {
        return {
          getPeople: function() {
            return customData;
          }
        };
      }
    };
  })
  .config(function(PeopleService3Provider) {
    PeopleService3Provider.customize([
      { name: 'Carol' },
      { name: 'David' },
      { name: 'Eve' }
    ]);
  })
  .run(function(PeopleService3) {
    console.log(PeopleService3.getPeople());
  })
;
