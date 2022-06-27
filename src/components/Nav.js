import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/add_user'>Add User</Link>
    </div>
  );
};

export default Nav;
