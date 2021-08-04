import { createStore } from 'vuex'

export default {
  namespaced: true,
  state: {
	  taskCompleat: 0,
	  taskToday: 0,
	  Tasks:[],
  },
  getters:{
	all: state => state.Tasks,
	done: state => state.taskCompleat,
	today: state => state.taskToday, 

  },
  mutations: {
		addTask(state, a){
			// state.Tasks += a
			// state.Tasks.push(a)
			state.taskToday += 1
			state.Tasks = [ a,...state.Tasks]
		},
		taskDone(state, task) {
			task.Done = true;
			state.taskToday -= 1
			state.taskCompleat += 1
		}

  },
  actions: {
	  setTitle(store, e){
			
		  if (e.target[0].value != '' && e.target[1].value != '' && e.target[1].value.length >= 15 ) {
			  store.commit('addTask', {
			  	title: e.target[0].value,
			  	about: e.target[1].value,
				Done: false
			  });
		  }
		  if (e.target[0].value == ''){
			e.target[0].classList.add('error')
		  }else{
			e.target[0].classList.remove('error')
			e.target[0].value = ''

		  }
		  if (e.target[1].value == '' || e.target[1].value.length < 15) {
		  	e.target[1].classList.add('error')
		  }else{
		  	e.target[1].classList.remove('error')
		  		e.target[1].value = ''

		  }
			// console.log(e.target.value);

	  },
	  taskDone(store, task){
		  store.commit('taskDone', task);
	  },
  },
};