/**
 * 
 * @type {
 * {bindings: 
 * {selected: string, items: string, fieldName: string, fieldLabel: string, categoryField: string}, controllerAs: string, controller: myCategorySelect.controller, template: string}}
 */
var myCategorySelect = {
    bindings: {
        selected: "=",
        items: "=",
        fieldName: "@",
        fieldLabel: "@",
        categoryField: "@"
    },
    controllerAs: "vm",
    controller: function ($scope) {
        "use strict";

        var vm = this;
        vm.cats = [];

        vm.init = function () {
            if(vm.fieldLabel == undefined){
                vm.fieldLabel = "Category";
            }

            if(vm.categoryField == undefined){
                vm.categoryField = "Category";
            }
        };

        // watch for changes
        $scope.$watch("vm.items", function () {

            if (vm.items != undefined) {
                buildList();
            }
        });


        var buildList = function () {

            //create a temporary list for building the list
            var catsList = [];


            // loop through all the tags in the list
            angular.forEach(vm.items, function (key, value) {

                // separate out tags
                var cats = getCats(key[vm.categoryField]);
                                
                //add unique values to the temporary list
                angular.forEach(cats, function (key, value) {
                    if (catsList.indexOf(key.trim()) == -1) {
                        catsList.push(key.trim())
                    }
                });

            });

            // copy sorted list to the main category list
            vm.cats = catsList.sort();

            //add an All option to the first item in the list
            vm.cats.unshift("All");

            // set the default option to All
            vm.selected = "All";
        };


        var isJson = function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        var getCats = function (tags) {

            if (isJson(tags)) {
                return angular.fromJson(tags);
            }
            else {
                return tags.split(",");
            }

        };



        vm.init();

    },
    template: ["<div class='form-group'>",
        "<label class='control-label' style='min-width: 110px; text-align: left' >{{vm.fieldLabel}}</label>",
        "<select ng-model='vm.selected' class='form-control'>",
        "<option ng-repeat='category in vm.cats'   value='{{category}}' >{{category}}</option>",
        "</select>",
        "</div>"].join("")
};

myCategorySelect.$inject = ["$scope"];

angular.module("myComponents").component("myCategorySelect", myCategorySelect);