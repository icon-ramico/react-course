const CommentList = ({ ...props }) => {
  const { title, data: comments } = props;
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
        </div>
      ))}
    </div>
  );
};

export default CommentList;
