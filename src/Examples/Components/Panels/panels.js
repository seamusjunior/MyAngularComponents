var panels = {
    controller: function($location) {
        var vm = this;
        vm.add = function() {
            alert('Add Clicked');
        };

        vm.edit = function() {
            alert('Edit Clicked');
        };
    },
    
    templateUrl: 'app/Panels/panels.html'
};


angular.module('examples').component('panels', panels);
