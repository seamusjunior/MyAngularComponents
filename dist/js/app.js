var app = angular.module('myComponents', ['ngAnimate', 'ui.bootstrap', 'ejangular']);


// app.config(function($momentProvider){
//     $momentProvider
//         .asyncLoading(true)
//         .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
// });
// //
// app.config([ '$momentProvider',
//     function($momentProvider) {
//
//         $momentProvider
//             .defaultViewFormat('LL')
//             .defaultModelFormat('MM/DD/YYYY')
//             .strictView(false);
//
//     } ]);
var myCreateButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
        cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;
       
        vm.$onInit = function () {
            //default options
            vm.id = 'create';
            vm.buttonText = 'Create';
            vm.icon = 'plus';
            vm.cssClass = 'btn btn-success';
        };

       
    },
    templateUrl: 'app/Buttons/CreateButton/createButtonTemplate.html'
};


angular.module('myComponents').component('myCreateButton', myCreateButton);




var myDeleteButton = {
    bindings: {
        id: '@',
        buttonText: '@',
        click: '&',
          cssClass:'@'
    },
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

        //default options
        vm.id = 'delete';
        vm.buttonText = 'Delete';
        vm.icon = 'cross';

    },
    templateUrl: 'app/Buttons/DeleteButton/deleteButtonTemplate.html'

};


angular.module('myComponents').component('myDeleteButton', myDeleteButton);




var myEditButton = {
    bindings: {
        click: '&',
        id: '@',
         cssClass:'@'
        
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

         //default options
        vm.id = 'delete';
        vm.buttonText = 'Delete';
        vm.icon = 'bars';
    
    },
    template: 'editButtonTemplate.html'
};

angular.module('myComponents').component('myEditButton', myEditButton);

var myCheckboxField = {
  bindings: {
    checked: '@',
    Label: '@',
    icon: '@'
  },
  controllerAs:'vm',
  controller:function(){
    var vm = this;
    vm.checked = true;
  },
  templateUrl: 'app/CheckBoxes/CheckboxField/checkboxField.html'

};

angular.module('myComponents').component('myCheckboxField', myCheckboxField);
  
var myDisplayCheckField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    template: ["<div class='row'>",
                    "<div class='col-sm-8'>",
                         "<label class='control-label'><strong>{{$ctrl.fieldLabel}}</strong></label>",
                    "</div>",
                    "<div class='col-sm-2'>",
                         "<i ng-show='$ctrl.ngModel' class='fa fa-check fa-2x'></i>",
                    "</div>",
                 "</div>"].join("")
};
angular.module('myComponents').component("myDisplayCheckField", myDisplayCheckField);
/**
 * Date field component with Field Label, Date Popup, Help Popup
 * @type {{bindings: {ngModel: string, fieldName: string, fieldLabel: string, toolTip: string, showToolTip: string}, controllerAs: string, controller: myDateField.controller, template: string}}
 */
var myDateField = {
    bindings: {
        ngModel: "=",
        fieldName: "@",
        fieldLabel: "@",
        toolTip: "@",
        showToolTip: "@"
    },
    controllerAs: "vm",
    controller: function($log) {
        "use strict";
        var vm = this;


        vm.fieldLabel = "Set this Text using field-label";
        

        this.$onInit = function() {
          
            
           //'initializeDate();

            // if the field name is not specified set the field name to the label text 
            if (vm.fieldName == null) {
                vm.fieldName = vm.fieldLabel.replace(" ", "");
            }

            // if the tooltip text is specified show the tooltip
            if (vm.toolTip) {
                vm.showToolTip = true;
            }

            // start with the date popup closed
            vm.popup1 = {
                opened: false
            };

        };





         vm.dateValue = new Date('2/3/2013');
               vm.locale = "en-US";






        // open the date popup
        vm.open = function() {
            vm.popup1.opened = true;
        };



    },
    templateUrl: "app/Dates/DateField/dateFieldTemplate.html"
};


var app = angular.module('myComponents')
    .component('myDateField', myDateField);

var myDisplayDateField = {
    bindings: {
        fieldLabel: '@',
        ngModel: '=',
        fieldName: '@'
    },
    controllerAs:"vm",
    controller: function () {
        "use strict";
        
        
        var vm = this;
        
        //if the date is not a date object - convert
        if(typeof vm.ngModel !== 'date'){
            vm.ngModel = new Date(vm.ngModel);
        }
        
    },
    templateUrl: "displayDate.html"
};

angular.module('myComponents').component("myDisplayDateField", myDisplayDateField);
var myDisplayField = {
	    bindings: {
	        fieldLabel: '@',
	        ngModel: '=',
			fieldLabelWitdh: "@"
	    }, 
		controllerAs: "vm",
		controller: function () {
			var vm = this;
			
			if(vm.fieldLabelWitdh == undefined) {
				vm.fieldLabelWitdh = "col-md-4"
			}
			
		},
	    templateUrl: "app/Fields/DisplayField/displayFieldTemplate.html"
};

angular.module('myComponents').component("myDisplayField", myDisplayField);
var myDispalyTextarea= {
   bindings: {
        fieldLabel: '@',
        ngModel: '='
    },
    controllerAs:'vm',
    controller: function(){
      var vm = this;
      vm.fieldLabel = 'You can set this text using field-label=';
      
      },
    templateUrl: 'app/Fields/DisplayField/displayFieldTemplate.html'
};


angular.module('myComponents').component('myDisplayTextarea', myDispalyTextarea);

var myTextareaField = {
    bindings: {
        fieldLabel: '@',
        fieldName: '@',
        ngModel: '=',
        required: '@',
        toolTip: '@',
        showToolTip: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        if (vm.toolTip) {
            vm.showToolTip = true;
        }

        if (vm.fieldName == null) {
            vm.fieldName = vm.fieldLabel.replace(' ', '');
        }

        if (vm.required == null) {
            vm.required = false;
        }
    },
    template: [].join('')
};


angular.module('myComponents').component('myTextareaField', myTextareaField);

var myTextField = {
    bindings: {
        fieldLabel: "@",
        fieldName: "@",
        ngModel: "=",
        required: "@",
        toolTip:"@"
    },
    controllerAs:"vm",
    controller: function () {
        var vm = this;
        
        if(vm.toolTip)
        {
            vm.showToolTip = true;
        }
        
        if (vm.fieldName == null) {
            vm.fieldName = vm.fieldLabel.replace(" ", "");
            console.log(vm.fieldName);
        }

        if (vm.required == null ) {
            vm.required = false;
        }
    },
    template: ["<div class='form-group'>",
        " <label class='control-label'  style='min-width: 80px !important;' >{{vm.fieldLabel}}</label>",
        " <div class='input-group'  style='width: 80% !important;'>",
        " <input type='text'  class='form-control' id='{{vm.fieldName}}' ng-model='vm.ngModel' ng-required='{{ vm.required }}'>",
        "   <div class='input-group-addon' style='line-height: 0 !important;'  ng-show='vm.showToolTip'><my-popover ng-model='vm.toolTip'></my-popover></div>",
        " </div>",
        "</div>"].join("")
};


angular.module("myComponents").component("myTextField", myTextField);

var myFilterTextbox = {
  bindings: {
    placeholder: "@",
    ngModel: "=",
    fieldName: "@"
  },
  controllerAs: "vm",
  controller: function () {
    "use strict";

    var vm = this;

    vm.fieldName = "filterTextBox";
    vm.placeholder = "Filter ";
    
  },
  templateUrl: "FilterTemplate.html"
};


angular.module("myComponents").component("myFilterTextbox", myFilterTextbox);

var myPageTitle = {
    bindings: {
        title: "@"
    },
    controllerAs: "vm",
    template: "pageHeaderTemplate.html"
};


angular.module("myComponents").component("myPageTitle", myPageTitle);




var myPanel = {
    transclude: true,
    bindings: {
        title: '@',
        fieldName: '@',
        style: '@',
        icon: '@',
        iconSize: '@',
        smallHeading: '@',
        showAddButton: '@',
        showEditButton: '@',
        addButtonId: '@',
        editButtonId: '@',
        add: '&',
        edit: '&',
        showFooter: '@',
        footerLeftLabel: '@',
        footerRightLabel: '@',
        height: '@',
        showVerticalScrollBar: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';

        var vm = this;


        vm.init = function () {
            vm.setDefaults();
        };

        vm.setDefaults = function () {
            if (vm.height == undefined) {
                vm.height = 150;
            }

            if (vm.showVerticalScrollBar == undefined) {
                vm.showVerticalScrollBar = false;
            }
            
            if (vm.showAddButton == undefined) {
                vm.showAddButton = false;
            }
            if (vm.showEditButton == undefined) {
                vm.showEditButton = false;
            }
            if (vm.editButtonId == undefined) {
                vm.editButtonId = 'panelEditButton'
            }
            if (vm.addButtonId == undefined) {
                vm.addButtonId = 'panelAddButton'
            }
            if (vm.showFooter = undefined) {
                vm.showFooter = false;
            }
            if (vm.footerLeftLabel = undefined) {
                vm.footerLeftLabel = '';
            }
            if (vm.footerRightLabel = undefined) {
                vm.footerRightLabel = '';
            }
        };


        vm.getPanelStyle = function () {

            var s = 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            console.log(s);
            
            return 'overflow-y: ' + vm.getScrollBarVisibility(vm.showVerticalScrollBar) ;
            
        };
        
        vm.getPanelHeadingStyle = function () {
           if (vm.smallHeading != undefined) {
                return   'padding: 3px 5px !important; ';
            }
            return   'padding: 10px 15px';
        };

        vm.getPanelContentStyle = function () {
            return 'overflow-y: auto;'
        };

        
        vm.getScrollBarVisibility = function (showVerticalScrollBar) {
            if(showVerticalScrollBar){
                return 'scroll';
            }
            else {
                return 'hidden';
            }
        };

        vm.getButtonStyle = function () {
            if (vm.smallHeading != undefined) {
                return 'margin-left: 5px; padding: 3px;';
            }
            return 'margin-left: 5px; padding: 10px;';
        };

        vm.init();

    },
    templateUrl:'app/Panels/Panel/panelTemplate.html'
};


// ' <div class='row'>' +
// ' <div class='col-md-6'>{{vm.footerLeftLabel}}</div>'+
// ' <div class='col-md-6'>{{vm.footerRightLabel}}</div>'+
// '</div>' +
angular.module('myComponents').component('myPanel', myPanel);
var myInfoPanel = {
    bindings: {
        info: '@',
        icon: '@',
        color: '@'
    },
    controllerAs: 'vm',
    controller: function () {
        'use strict';
        var vm = this;

        vm.init = function () {


            if (vm.icon == undefined) {
                vm.icon = 'fa fa-info fa-2x';
            }

            if (vm.color == undefined) {
                vm.color = '#64518A';
            }
        };


        vm.getStyle = function () {
            return ' border-left: 5px solid #64518A;' +
                ' border-radius: 0 15px 15px 0; !important; ' +
                ' padding: 1rem 1rem;   !important; ' +
                ' background: ' + vm.color + ' !important;' +
                ' font-size: 1.65rem; !important; margin: 0;  !important; ' +
                ' color: ' + vm.color + ' !important;';
        };

        
        vm.init();
      

    },
    templateUrl: 'infoPanelTemplate.html'
};


angular.module('myComponents').component('myInfoPanel', myInfoPanel);
angular.module('myComponents').run(['$templateCache', function($templateCache) {$templateCache.put('app/Buttons/CreateButton/createButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}} <i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Buttons/DeleteButton/deleteButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}} <i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/Buttons/EditButton/editButtonTemplate.html','<div class={{vm.cssClass} id={{vm.id}} ng-click=vm.click()>{{vm.buttonText}} <i class="fa fa-{{vm.icon}}"></i></div>]');
$templateCache.put('app/ComboBoxes/CategorySelect/categorySelectTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.selected class=form-control><option ng-repeat="category in vm.cats" value={{category}}>{{category}}</option></select></div>');
$templateCache.put('app/CheckBoxes/CheckboxField/checkboxField.html','<input type=checkbox class=nodetext id=check1> <label for=check1 class=clslab>Music</label>');
$templateCache.put('app/CheckBoxes/DisplayCheckField/displayCheckFieldTemplate.html','');
$templateCache.put('app/Dates/DateField/dateFieldTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><div class=input-group><input type=text class=form-control id={{vm.fieldName}} ej-datepicker e-value=vm.ngModel></div></div>');
$templateCache.put('app/Dates/DisplayDate/displayDateTemplate.html','<div class=row><div class=col-md-4><span class=control-label><strong>{{vm.fieldLabel}}</strong></span></div><div class=col-md-8>{{vm.ngModel | date:\'medium\' }}</div></div>');
$templateCache.put('app/Fields/DisplayField/displayFieldTemplate.html','<div class=row><div class={{vm.fieldLabelWitdh}}><label class=control-label><strong>{{vm.fieldLabel}}</strong></label></div><div class=col-sm-6>{{vm.ngModel}}</div></div>');
$templateCache.put('app/Fields/DisplayTextArea/displayTextAreaTemplate.html','<div class=well><strong>{{vm.fieldLabel}}</strong><p>{{vm.ngModel}}</p></div>');
$templateCache.put('app/Fields/TextArea/textAreaFieldTemplate.html','<div class=form-group><label class=control-label style="min-width: 80px !important;">{{vm.fieldLabel}}</label><div class=input-group style="width: 80% !important;"><textarea type=text class=form-control id={{vm.fieldName}} ng-model=vm.ngModel ng-required="{{ vm.required }}">\r\n           <div class=input-group-addon style="line-height: 0 !important;" ng-show=vm.showToolTip><my-popover ng-model=vm.toolTip></my-popover></div>\r\n        </textarea></div></div>');
$templateCache.put('app/Fields/TextField/textFieldTemplate.html','');
$templateCache.put('app/Filters/FilterTextbox/filterTextboxTemplate.html','<div class=input-group style="display: flex"><input type=text ng-model=vm.ngModel placeholder={{vm.placeholder}} id={{vm.fieldName}} class=form-control> <button class="btn btn-default class=" input-group-btn\' id=searchFilter><i class="glyphicon glyphicon-search"></i></button></div>');
$templateCache.put('app/Headers/PageHeader/pageHeaderTemplate.html','<h1 id=pagetitle>{{ vm.title }}</h1>');
$templateCache.put('app/Modals/ModalButtons/modalButtonsTempalte.html','<div class=modal-footer><span><button type=submit id=save class="btn btn-primary btn-large pull-left" ng-click=vm.save()>{{vm.savetext}}</button> <button type=button class="btn btn-default pull-left" id=close ng-click=vm.close()>Close</button></span></div>');
$templateCache.put('app/Modals/ModalHeader/modalHeaderTempalte.html','<div class=modal-header><h3 class=modal-title>{{$ctrl.title}}</h3></div>');
$templateCache.put('app/Other/PopOver/popOverTemplate.html','');
$templateCache.put('app/Other/Spinner/spinnerTemplate.html','<div class="row text-center"><img style="height: 100px" ng-src=http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif></div>');
$templateCache.put('app/Panels/InfoPanel/infoPanelTemplate.html','<div class=myInfoPanel + style={{vm.getStyle()}}><i class="fa fa-{{vm.icon}} fa-2x" style="margin: 4px; color: #64518A"></i> + {{vm.info}}<ul class=on-page-nav></ul></div>');
$templateCache.put('app/Panels/MoreLessButton/moreLessButtonTemplate.html','<button type=button class={{vm.cssClass} id={{vm.id}} ng-click="vm.isCollapsed = !vm.isCollapsed"><i ng-class=vm.getButtonIcon() aria-hidden=true></i>{{vm.getButtonText() }}</button>');
$templateCache.put('app/Panels/MoreLessPanel/moreLessPanel.html','<div class="panel panel-{{vm.style}}" style={{vm.getPanelStyle()}}><div class=panel-heading style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i> <span style="padding-left: 10px; font-weight: 700">{{vm.title}}</span><div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-bars"></i></div></div><div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}} ng-if=!vm.isCollapsed>{{vm.ngModel}}</div><div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/Panels/Panel/panelTemplate.html','<div class="panel panel-{{vm.style}}" style={{vm.getPanelStyle()}}><div class=panel-heading style={{vm.getPanelHeadingStyle()}} id={{vm.fieldName}}><i class="fa fa-{{vm.icon}} fa-{{vm.iconSize}}x"></i> //////////// /// title <span style="padding-left: 10px; font-weight: 700">{{vm.title}}</span> //////////// /// buttons<div ng-show=vm.showAddButton id={{vm.addButtonId}} ng-click=vm.add() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-plus"></i></div><div ng-show=vm.showEditButton id={{vm.editButtonId}} ng-click=vm.edit() style={{vm.getButtonStyle()}} class="btn btn-default pull-right"><i class="fa fa-bars"></i></div></div>//////////// /// body<div class=panel-body ng-transclude style={{vm.getPanelContentStyle()}}></div>///////////// // footer<div class=panel-footer ng-if=vm.showFooter style={{vm.getPanelStyle()}}><div class=row><div class=col-md-6><span class=pull-left>{{vm.footerLeftLabel}}</span></div><div class=col-md-6><span class=pull-right>{{vm.footerRightLabel}}</span></div></div></div></div>');
$templateCache.put('app/SelectLists/SelectList/selectList.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">{{vm.fieldLabel}}</label><select ng-model=vm.ngModel class=form-control id={{vm.fieldName}}><option ng-repeat="option in vm.items" value={{option.Id}}>{{option.Id}}</option></select></div>');
$templateCache.put('app/StatusAlerts/StatusAlert/statusAlert.html','<div ng-hide=vm.form.$dirty><div id=errorMessage style="margin-top: 10px;" ng-show=vm.error><div class=well style="color: white; background: red; font-size: large" role=alert><i class="fa fa-warning"></i>{{vm.message}}<br><small>This is a system error. An alert has been send to the developer and will let you know when this has been fixed.</small></div></div><div id=successMessage style="margin-top: 10px;" ng-show=vm.success><div class=well style="color: white; background: green; font-size: large" role=alert><i class="fa fa-check"></i>{{vm.message}}</div></div></div>');
$templateCache.put('app/Tags/TagsField/tagsFieldTemplate.html','<div class=form-group><span for=tags>{{vm.fieldLabel}}</span><ui-select multiple ng-model=vm.selected id=tags><ui-select-match placeholder=Select tag...>{{vm.Name}}</ui-select-match><ui-select-choices repeat=tag in vm.tags><div ng-bind-html=tag></div></ui-select-choices></ui-select></div>');
$templateCache.put('app/Tags/TagsFilter/tagsFilterTemplate.html','<div class=form-group><label class=control-label style="min-width: 110px; text-align: left">Tags</label><div class=form-control><span ng-repeat="tag in vm.tagList track by $index"><span class=badge ng-click=vm.tagClicked(tag) style="cursor: pointer">{{tag}}</span></span></div></div>');}]);