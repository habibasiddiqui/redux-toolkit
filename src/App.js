import { Provider } from 'react-redux';
import './App.css';
import CounterBtn from './components/CounterBtn';
import CounterView from './components/CounterView';
import TodoList from './components/TodoList';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CounterBtn />
        <CounterView /> */}
        <TodoList />
        
      </div>
    </Provider>

  );
}

export default App;
