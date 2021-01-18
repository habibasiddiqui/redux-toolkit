import { Provider } from 'react-redux';
import './App.css';
import CounterBtn from './components/CounterBtn';
import CounterView from './components/CounterView';
import TodoList from './components/TodoList';
import store from './store/Store';
import { Grid } from "@material-ui/core";
import Title from './components/Title';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CounterBtn />
        <CounterView /> */}
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center">
                <Grid style={{border: '1px solid black'}} item xs={12} sm={10} md={8} lg={8}>
            <Title />

                  <TodoList />
                </Grid>
        </Grid>
      </div>
    </Provider>

  );
}

export default App;
