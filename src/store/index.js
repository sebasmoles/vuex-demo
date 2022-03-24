import { createStore } from "vuex";
import todos from "./modules/todos";

// Create a store
export default createStore({
	modules: {
		todos,
	},
});
