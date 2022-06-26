// import OurText from './components/OurText';
// import bankAccounts from './data/accounts';

import { useEffect, useState } from 'react';
import OurList from './components/OurList';
import Users from './components/Users';
import useFetch from './hooks/useFetch';

function App() {
  const [name, setName] = useState('Rami');
  // const [bAccounts, setbAccounts] = useState(bankAccounts);

  // we use DHTML properties instead
  // const deleteHandler = id => {
  //   const newBankAccounts = bankAccounts.filter(account => account.id !== id);
  //   setbAccounts(newBankAccounts);
  // };

  // const [comments, setComments] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // not async
  //   fetch('https://jsonplaceholder.typicode.com/comments1')
  //     .then(res => {
  //       if (!res.ok) throw new Error('Error from server!');
  //       return res.json();
  //     }) // {name:'ali'} in json {"name":"ali"}
  //     .then(data => {
  //       setComments(data);
  //       setLoading(false);
  //     })
  //     .catch(e => {
  //       setError(e.message);
  //       setLoading(false);
  //     });
  //   return () => {
  //     setComments(null);
  //     setError(null);
  //     setLoading(true);
  //   }; // clean up
  // }, []);

  const { data: users, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users');
  const {
    data: comments,
    error: CommentError,
    loading: CommentLoading,
  } = useFetch('https://jsonplaceholder.typicode.com/comments');

  return (
    <div className='App'>
      <h1 className='header'> Hello {name} </h1>
      {/* <OurText name='Rami' />
      <hr />
      <OurText name='Rami'></OurText> */}
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {
        // javascript evaluation  for ('',false , null, 0, undefined) is: false
        users && <Users data={users} title='Users' />
      }

      {CommentError && <div>{CommentError}</div>}
      {CommentLoading && <div>Loading...</div>}
      {
        // javascript evaluation  for ('',false , null, 0, undefined) is: false
        comments && <OurList data={comments} title='Comments' />
      }
      <button onClick={() => setName('ahmad')}>change name</button>
    </div>
  );
}

export default App;
