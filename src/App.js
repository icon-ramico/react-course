import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import AddComment from './components/AddComment';
// {data: users}
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add_comment' component={AddComment} />
        <Route path='/user_details/:id' component={UserDetails} />
      </Switch>
      <div className='content'></div>
    </Router>
  );
}
// http://localhost:3000 -> http://localhost:3000/
export default App;
