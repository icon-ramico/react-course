
const AddComment = () => {

  return (
    <div>
      <h2 style={{ marginTop: -10, marginBottom: 20 }}>Create new Comment Form</h2>
      <form>
        <div>
          <label htmlFor='comment_name'>Name</label>
          <input type='text' id='comment_name' name='name' required  />
        </div>
        <div>
          <label htmlFor='commenter_email'>Email</label>
          <input type='email' id='commenter_email' name='email' required />
        </div>
        <div>
          <label htmlFor='comment_body'>Body</label>
          <textarea id='comment_body' name='body'></textarea>
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
