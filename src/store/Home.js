import { createStore } from 'vuex'

export default {
  namespaced: true,
  state: {
	  taskCompleat: getTaskCompleat(),
	  taskToday: getTasksToDay(),
	  Tasks: [...getTasks()],
	  Dones: [...getTasksDone()]
  },
  getters:{
	all: state => state.Tasks,
	allDone: state => state.Dones,
	done: state => state.taskCompleat,
	today: state => state.taskToday, 

  },
  mutations: {
		addTask(state, a){
			// state.Tasks += a
			// state.Tasks.push(a)
			state.taskToday += 1
			localStorage.setItem('taskToday', JSON.stringify(state.taskToday))
			state.Tasks = [a, ...getTasks()]
			localStorage.setItem('tasksDone', JSON.stringify(state.Dones))
			localStorage.setItem('tasks', JSON.stringify(state.Tasks))
			getTasks()
			
			
		},
		taskDone(state, task) {
			task.Done = true;
			state.taskToday -= 1
			state.taskCompleat += 1
			localStorage.setItem('taskCompleat', JSON.stringify(state.taskCompleat))
			localStorage.setItem('taskToday', JSON.stringify(state.taskToday))
			state.Tasks.forEach(function(item, index){
				if (item.Done) {
					state.Tasks.splice(index, 1);
					state.Dones.unshift(item)
				}
			});
			if (state.Dones.length > 8) {
				state.Dones.pop()
			} else {}
			localStorage.setItem('tasksDone', JSON.stringify(state.Dones))
			localStorage.setItem('tasks', JSON.stringify(state.Tasks))
			

			
		},
		removeTask(state, remTarget){
			let arr = state.Dones
			arr.forEach(function(el, index){
				if (el == remTarget) {
					arr.splice(index, 1);
				}
			});
			state.taskCompleat -= 1
			localStorage.setItem('taskCompleat', JSON.stringify(state.taskCompleat))
			localStorage.setItem('tasksDone', JSON.stringify(arr))
		},


  },
  actions: {

	  setTitle(store, e){
		  if (e.target[0].value != '' && e.target[1].value != '' && e.target[1].value.length >= 15 ) {
			  store.commit('addTask', {
			  	title: e.target[0].value,
			  	about: e.target[1].value,
				Done: false,
				Date: new Date().toLocaleDateString()
			  });
		  }
		  if (e.target[0].value == ''){
			e.target[0].classList.add('error')
			e.target.querySelectorAll('.none').forEach(el => el.classList.add('warn'))
			e.target.querySelectorAll('.none').forEach(el => el.classList.remove('none'))
		  }else{
			e.target[0].classList.remove('error')
			e.target.querySelectorAll('.none').forEach(el => el.classList.remove('warn'))
			e.target.querySelectorAll('.none').forEach(el => el.classList.add('none'))
			e.target[0].value = ''

		  }
		  if (e.target[1].value == '' || e.target[1].value.length < 10) {
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

	  taskRemove(store, e){
		 store.commit('removeTask', e)
	  }
  },
};




function getTasks() {
	let a = JSON.parse(localStorage.getItem('tasks'))
	if(!a){
		a = []
	}
	return a
}

function getTasksToDay() {
	let a = JSON.parse(localStorage.getItem('taskToday'))
		if (!a) {
			a = 0
		}
	return a
}

function getTaskCompleat() {
	let a = JSON.parse(localStorage.getItem('taskCompleat'))
	if (!a) {
		a = 0
	}
	return a
}
function getTasksDone(){
	let a = JSON.parse(localStorage.getItem('tasksDone'))
	if (!a) {
		a = []
	}
	return a
}


