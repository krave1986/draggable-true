<template>
	<div id="app" v-draggable-true:bbc="boys">
		abc
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			bbc: "qqq",
			instance: this
		};
	},
	methods: {
		dragstartHandler: function(ev) {
			console.log("bang bang bang");
			console.log(ev);
		}
	},
	computed: {
		boys: function() {
			return {
				dragstart: this.dragstartHandler
			};
		}
	}
};
</script>

<style>
body {
	margin: 0;
}
</style>
