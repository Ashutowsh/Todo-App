import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Todos from "./components/Todos";
function App() {
  return (
    <Provider store={store}>
      <h1 class="text-3xl font-bold text-center mt-8 text-blue-700 bg-yellow-200 p-4 rounded-lg">
        The Todo App
      </h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
