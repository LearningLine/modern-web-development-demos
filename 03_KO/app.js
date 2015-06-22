/// <reference path="typings/knockout/knockout.d.ts"/>
/// <reference path="typings/knockout.mapping/knockout.mapping.d.ts"/>

// var vm = {
// 	new_name:'',
// 	name:ko.observable('Brock'),
// 	age:ko.observable(23),
// 	kids: ko.observableArray([
// 		{name:ko.observable('Mira')},
// 		{name:ko.observable('Tess')}
// 	])
// };

var vm = {
	name:'Brock',
	age:23,
	kids: [
		{name:'Mira'},
		{name:'Tess'}
	]
};
vm = ko.mapping.fromJS(vm);

vm.new_name = ko.observable('');

vm.addKid = function () {
	vm.kids.push({name:ko.observable(vm.new_name())});
};

vm.removeKid = function (kid) {
	vm.kids.remove(kid);
};

vm.getOlder = function () {
	vm.age(vm.age()+1);
};

vm.isOld = ko.computed(function () {
	return vm.age() >= 35;
});

vm.description = ko.computed(function () {
	return vm.name() + " is " + vm.age() + " years old.";	
});

vm.save = function () {
	var plain = ko.mapping.toJSON(vm);
	console.log(plain);
};

ko.applyBindings(vm);
