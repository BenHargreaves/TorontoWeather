angular
    .module('TorontoWeather', [])
    .controller('WeatherCtrl', function($scope, $http){
            $scope.weatherData = [];
            var weatherURL = "https://fcc-weather-api.glitch.me/api/current?lat=43.6532&lon=-79.3832";

            $scope.loadData = function(){
                $http.get(weatherURL)
                .then(function(response){
                    $scope.weatherData = response.data;
                })
            }

            //call loadData when controller initialized
            $scope.loadData();
    })

