angular.module('examples').run(['$templateCache', function($templateCache) {$templateCache.put('app/Buttons/buttons.html','<h1>Buttons</h1><hr><blockquote><pre>\r\n       <code>\r\n           &lt;my-create-button&gt;&lt;/my-create-button&gt;\r\n        </code>\r\n    </pre></blockquote><my-create-button></my-create-button><my-delete-button></my-delete-button><my-edit-button></my-edit-button>');
$templateCache.put('app/CheckBoxes/checkBoxes.html','<h1>Check Boxes</h1><hr><my-checkbox-field field-label="Question 1" checked=false></my-checkbox-field>');
$templateCache.put('app/ComboBoxes/comboBoxes.html','<h1>Combo Boxes</h1><hr><div class=well><h4>Category Select</h4><strong>Items :</strong> {{vm.fakeItems}}<br><h4>Using Default</h4><strong>Selected Category:</strong>{{ selectedCategory }}<br><my-category-select items=vm.fakeItems selected=selectedCategory></my-category-select><hr><h4>Specify "Types" Field</h4><strong>Selected Type:</strong>{{ selectedType }}<br><my-category-select items=vm.fakeItems selected=selectedType category-field=Types field-label=Type></my-category-select><hr><h4>Specify "Town" Field</h4><strong>Selected Town:</strong>{{ selectedTown }}<br><my-category-select items=vm.fakeItems selected=selectedTown category-field=Town field-label=Town></my-category-select></div>');
$templateCache.put('app/Dates/dates.html','<h1>Dates 1</h1><hr><my-date-field field-label="Departure Date" ng-model=vm.date></my-date-field>');
$templateCache.put('app/Panels/panels.html','<h1>Panels</h1><hr><my-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>Panel with tight heading with Icon</my-panel><my-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>Panel with tight heading with Icon</my-panel><my-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>Panel with tight heading with Icon</my-panel><my-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>Panel with tight heading with Icon</my-panel><my-panel title="Text Field" style=success small-heading=true>Panel with tight heading and no Icon</my-panel><my-panel title="Text Field" style=success show-edit-button=true show-add-button=true show-footer=true footer-right-label="Footer Right label" footer-left-label="Footer Left label" small-heading=true>Panel with tight heading and no Icon</my-panel><h3>My-more-less-panel</h3><my-more-less-panel title="Text Field" icon=user icon-size=2 style=success small-heading=true>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia "</my-more-less-panel>');
$templateCache.put('app/Fields/fields.html','<h1>Fields</h1><hr><h5>Display Field</h5><my-display-field field-label="First Name" field-name=FirstName ng-model=vm.firstName></my-display-field><my-display-textarea field-label=Description field-name=Description ng-model=vm.sampleText></my-display-textarea><hr><h5>Text Field</h5><my-text-field field-label="First Name" field-name=FirstName ng-model=vm.firstName></my-text-field><my-textarea-field field-label="First Name" field-name=FirstName ng-model=vm.sampleText></my-textarea-field>');
$templateCache.put('app/SelectLists/selectLists.html','<h1>Select Lists</h1><hr>{{vm.fakeItems}}<my-select-list items=vm.fakeItems field-label="Select Contact" field-name=contact></my-select-list>');
$templateCache.put('app/Status/status.html','<h1>Status</h1><hr>');}]);