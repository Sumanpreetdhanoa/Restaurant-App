angular.module('starter.services', [])
.factory('Reservations',function(){
    var reservationsArr = [];
    return {
        save:function(data){
            reservationsArr.push(data);
        },
        getAll:function(){
            return reservationsArr;
        }
    };
});