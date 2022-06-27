import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetails';
// {data: users}
function App() {
  return (
      <Router>
        <Nav />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/add_user'>
              <AddUser />
            </Route>
            <Route path='/user_details/:id'> 
              <UserDetails />
            </Route>
          </Switch>
        <div className='content'>
        </div>
      </Router>
  );
}
// http://localhost:3000 -> http://localhost:3000/
export default App;
