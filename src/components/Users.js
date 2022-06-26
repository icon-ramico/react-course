const OurList = ({ ...props }) => {
  const {  title, data: users, handleDeleteComment } = props;
  console.log(users);
  return (
    <div className='list'>
      <h2>{title}</h2>
      {/* array.map((el, i) =>) */}
      {users.map(user => (
        <div key={user.id}>
          <p>
           Name: {user.name}<br />
           User Name: {user.username}<br />
           E-mail: {user.email}<br />
           Phone: {user.phone}<br />
           Website: {user.phone}<br />
           <b>Comapany</b><br />
           Company: {user.company.name}<br />
           <b>Address</b><br />
           City: {user.address.city}

          </p>
          {/* <button onClick={() => handleDeleteComment(comment.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default OurList;
