<template>

<div id="app">
	
	<router-view></router-view>
	
</div>
  
</template>

<script>
	


export default {
	name: 'app',
}

</script>

<style>
	body{
		margin: 0;
		
	}
	ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	p{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	html,
	body{
		height: 100%;
	}
	#app{
		height: 100%;
	}
</style>
