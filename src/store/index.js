import { createStore } from 'vuex'
import Home from './Home'




export default createStore({
	modules: {
		Home

	},
	strict: process.env.NODE_ENV !== 'production',
});
