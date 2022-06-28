import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddComment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST', // GET POST PUT DELETE 
      body: JSON.stringify({ name, email, body }),
      headers: { 'content-type': 'application/json' }, //mime type
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false);
        // history.go(-1); // Home
        history.push('/'); // Home
      });
  };
  return (
    <div>
      <h2 style={{ marginTop: -10, marginBottom: 20 }}>Create new Comment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='comment_name'>Name</label>
          <input
            type='text'
            id='comment_name'
            name='name'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='commenter_email'>Email</label>
          <input
            type='email'
            id='commenter_email'
            name='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='comment_body'>Body</label>
          <textarea
            id='comment_body'
            name='body'
            value={body}
            required
            onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <div>
          <button type='submit'>{loading ? 'Loading...' : 'Save'}</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
