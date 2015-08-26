angular.module('waveList', [])
       .controller('waveCtrl', function( $scope, $http ) {

         var newWaves = [
           {
             "name" : "Ocean Beach",
             "location" : "San Francisco, CA.",
             "waveType" : "Beachbreak"
           },
           {
             "name" : "Ventura Point",
             "location" : "Ventura, CA.",
             "waveType" : "Pointbreak"
           },
           {
             "name" : "Swamis",
             "location" : "Encinitas, CA.",
             "waveType" : "Reef/Pointbreak"
           }
         ]

         $http.get( '../data/waves.json' ).success( function( waves ) {
           $scope.waves = waves;
         });

         $scope.add = function() {
           $scope.waves.push( newWaves.pop() );
         }

         $scope.remove = function( wave ) {
           newWaves.push( wave );
           $scope.waves = _.without( $scope.waves, wave )
         }

         $scope.edit = function( wave ) {
           $scope.editingWave = wave;
         }

         $scope.save = function( wave ) {
           $http.post( 'data/waves.json', wave )
           .success( function( response ) {
             alert("saved!");
           })
           .error( function( response ) {
             alert("Error: " + err);
           });
         }

       });
