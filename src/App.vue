<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		HelloWorld,
	},
}
</script>

<style>
html,
body,
#app {
	height: 100%;
}
</style>
