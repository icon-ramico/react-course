import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users/' + id);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <p>
          ID: {user.id}
          <br />
          Name: {user.name}
          <br />
          User Name: {user.username}
          <br />
          E-mail: {user.email}
          <br />
          Phone: {user.phone}
          <br />
          Website: {user.phone}
          <br />
          <b>Comapany</b>
          <br />
          Company: {user.company.name}
          <br />
          <b>Address</b>
          <br />
          City: {user.address.city}
        </p>
      )}
      <Link to='/'>&larr; Go back</Link>
    </div>
  );
};
export default UserDetails;
