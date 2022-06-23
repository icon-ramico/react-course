const OurList = ({ ...props }) => {
  const { gender: title, accounts: comments, handleDeleteComment } = props;
  return (
    <div className='list'>
      <h2>{title}</h2>
      {/* array.map((el, i) =>) */}
      {comments.map(comment => (
        <div key={comment.id}>
          <p>
            {comment.title} 
            <br />
            {comment.body}
          </p>
          {/* <button onClick={() => handleDeleteComment(comment.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default OurList;
