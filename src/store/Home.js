import { createStore } from 'vuex'

export default {
  namespaced: true,
  state: {
	  taskCompleat: getTaskCompleat(),
	  taskToday: getTasksToDay(),
	  Tasks: [...getTasks()],
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
			localStorage.setItem('taskToday', JSON.stringify(state.taskToday))
			state.Tasks = [a, ...getTasks()]
			localStorage.setItem('tasks', JSON.stringify(state.Tasks))
			getTasks()
			// console.log(state.Tasks)
			// console.log(state.Tasks[state.Tasks.length-1])
		},
		taskDone(state, task) {
			task.Done = true;
			state.taskToday -= 1
			state.taskCompleat += 1
			localStorage.setItem('taskCompleat', JSON.stringify(state.taskCompleat))
			localStorage.setItem('taskToday', JSON.stringify(state.taskToday))
			localStorage.setItem('tasks', JSON.stringify(state.Tasks))
			removeLastArray(JSON.parse(localStorage.getItem('tasks')));
		}

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




function getTasks() {
	let a = JSON.parse(localStorage.getItem('tasks'))
	if(!a){
		a = []
	}
	return a
}

function getTasksToDay() {
	let a = JSON.parse(localStorage.getItem('taskToday'))
		// if (!a) {
		// 	a = 0
		// }
	return a
}

function getTaskCompleat() {
	let a = JSON.parse(localStorage.getItem('taskCompleat'))
	// if (!a) {
	// 	a = 0
	// }
	return a
}


function removeLastArray(arr){
	let done = []
	arr.forEach(el => {
		if(el.Done == true){
			done.unshift(el)
		}   	
	});
	
	console.log(done)

	if(done.length > 11){
		done.shift()
	}



}