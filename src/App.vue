<template>

	<header class="head">
		<span>
		Tasks for today: {{today}}
		</span>
		<span>
		Tasks completed: {{done}}
		</span>
	</header>

	<div class="app">
		  <div id="nav">
    		<router-link to="/">Home</router-link> 
    		<router-link to="/active">Completed</router-link>
		</div>
			<router-view/>
	</div>



</template>

<script>
	import {mapActions, mapGetters, mapState} from 'vuex'

export default {
	computed:{
		...mapGetters('Home',{done: 'done'}),
		...mapGetters('Home',{today: 'today'}),

	}
}
</script>
<style lang="sass">
@import '@/assets/main.sass'

.app
	display: flex
	margin-left: 7%
	margin-top: 10%
#nav
	width: 20%
	display: flex
	flex-direction: column
	background-color: $secColor
	align-items: center
	justify-content: center
	height: 300px
	color: $trdColor
	border-radius: 20px
	box-shadow: 0px 0px 20px 10px $trdColor

#nav *
	margin-left: 5px
	margin-top: 7px
	padding: 5px

.head
	color: $mainColor
	background-color: $secColor
	display: flex
	flex-direction: column
	align-items: flex-end
	padding: 10px 50px 10px 0
	


</style>
