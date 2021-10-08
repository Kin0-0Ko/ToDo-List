<template>
	<div class="done">
		<div class="done-task" :class="none(task.Done)"  v-for="task in tasks"  :key="task">
				<span class="title">{{task.title}}</span>
				<span class="about">{{task.about}}</span>
				<span class="about">{{task.Date}}</span>
				<div class="btns">
		 				<button class="glow-on-hover" >Remove</button>
				</div>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapGetters, mapState} from 'vuex'

export default {
		computed: {
		...mapGetters('Home',{tasks: 'all'}),

		},
		methods:{
		none(a){
			if(a){
				
			}else{
				return 'none'
			}
		},
		...mapActions('Home', {setTitle: 'setTitle'}),
		...mapActions('Home', {addTask: 'addTask'}),
		},
}
</script>

<style lang="sass">
@import '@/assets/main.sass'

.done
	display: flex
	flex-direction: column
	align-items: center
	justify-content: flex-start
	width: 75%
	&-task
		display: flex
		flex-direction: column
		background-color: $secColor
		height: 180px
		width: 90%
		margin-top: 20px
		padding: 15px
		border-radius: 20px
		box-shadow: 0px 0px 20px 10px $trdColor
		
</style>