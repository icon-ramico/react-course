import { Link } from 'react-router-dom';

const Users = ({ ...props }) => {
  const { title, data: users } = props;
  return (
    <div className='list'>
      <h2>{title}</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>
            <Link to={`/user_details/${user.id}`}>Name: {user.name}</Link>
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
          {/* <button onClick={() => handleDeleteComment(comment.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default Users;
