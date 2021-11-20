<template>
	<div class="done" >
		<span class="nothing" :class="noth(Dones)"><h2>There's nothing here yet</h2></span>
		<div class="done-task"  v-for="Done in Dones"  :key="Done">
				<span class="title">{{Done.title}}</span>
				<span class="about">{{Done.about}}</span>
				<div class="btns">
						<span class="about">{{Done.Date}}</span>
		 				<button class="glow-on-hover" @click="taskRemove(Done)">Remove</button>
				</div>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapGetters, mapState} from 'vuex'

export default {
		computed: {
		...mapGetters('Home',{tasks: 'all'}),
		...mapGetters('Home',{Dones: 'allDone'}),

		},
		methods:{
		noth(a){
				let int = 0
				a.forEach(el => {
					if(el.Done){
						int = 1
					}
				});
				if(int == 0){
					
				}else{
					return 'none'
				}
			
		},
		none(a){
			if(a){
				
			}else{
				return 'none'
			}
		},
		...mapActions('Home', {taskRemove: 'taskRemove'}),
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
	max-height: 600px
	overflow: auto

	&-task
		display: flex
		flex-direction: column
		background-color: #ffffff10
		backdrop-filter: blur(12px)
		height: 170px
		width: 90%
		margin-top: 20px
		padding: 15px
		border-radius: 20px
.nothing
	font-size: 20px
	margin: 0
	background-color: #ffffff10
	backdrop-filter: blur(12px)
	border-radius: 10px
	text-align: center
	width: 75%
	color: #c2c0c0

		
</style>