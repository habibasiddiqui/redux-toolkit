import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
import store from './store/Store';
import { Grid } from "@material-ui/core";
import Title from './components/Title';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Grid container spacing={1} justify='center' alignContent='center'>     
          <Grid className='wrapper'  item xs={10} sm={10} md={8} lg={6} >

            <Title />
            <TodoList />

          </Grid> 
        </Grid>

      </div>
    </Provider>

  );
}

export default App;
