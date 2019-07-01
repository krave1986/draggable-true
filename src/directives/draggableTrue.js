import Vue from "vue";

Vue.directive("draggableTrue", {
	bind: function(el, binding) {
		el.setAttribute("draggable", true);
		for (const hKey in binding.value) {
			console.log("llllll");
			console.log(hKey);
			el.addEventListener(hKey, binding.value[hKey]);
		}
		console.log(binding);
		console.log(binding.value[binding.arg]);
	}
});
